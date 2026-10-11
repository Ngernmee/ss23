// Plain-text endpoint. Replace SCRIPT with code you own or have permission to distribute.
const SCRIPT = `-- Melon Dev raw script template
-- Replace this text with your own authorized code.
print("Melon Dev raw endpoint is working")
`;

module.exports = (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).send(SCRIPT);
};