export default async function handler(req, res) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    let body = {};

    try {
        if (req.method === "POST") {
            body = req.body;
        }
    } catch (e) {}

    const response = {
        key: {
            ok: true,
            valid: true,
            expiry_ms: 4102444800000
        }
    };

    res.status(200).json(response);
}
