import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { eventName, user_email, user_phone, user_name, event_id, quiz_data } = req.body;
  const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
  const FB_DATASET_ID = process.env.FB_DATASET_ID;

  if (!FB_ACCESS_TOKEN || !FB_DATASET_ID) {
    console.error('Missing Meta API credentials');
    return res.status(500).json({ error: 'Meta API credentials not configured' });
  }

  // Function to hash sensitive data (SHA256)
  const hashData = (data) => {
    if (!data) return '';
    const cleaned = data.trim().toLowerCase().replace(/\s+/g, '');
    return crypto.createHash('sha256').update(cleaned).digest('hex');
  };

  // Clean phone number (keep only digits)
  const cleanPhone = (phone) => {
    if (!phone) return '';
    return phone.replace(/\D/g, '');
  };

  const hashedEmail = hashData(user_email);
  const hashedPhone = hashData(cleanPhone(user_phone));

  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];

  const payload = {
    data: [
      {
        event_name: eventName || 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        event_id: event_id || `lead_${Date.now()}`,
        action_source: 'website',
        user_data: {
          em: [hashedEmail],
          ph: [hashedPhone],
          client_ip_address: clientIp,
          client_user_agent: userAgent,
        },
        custom_data: {
          user_name: user_name,
          ...quiz_data
        }
      }
    ],
  };

  try {
    const response = await fetch(`https://graph.facebook.com/v17.0/${FB_DATASET_ID}/events?access_token=${FB_ACCESS_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log('Meta CAPI Response:', result);
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error sending to Meta CAPI:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
