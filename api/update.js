const db = require("../db");
const auth = require("../utils/auth");
const allowedRings = require("../data/allowedRings.json");
const spicaCredits = require("../data/spicaCredits.json");

module.exports = async (req, res) => {
	const authUser = await auth(req);
	if (!authUser || authUser.id !== req.params.id)
		return res.status(401).json({ err: "badAuthorization" });
	if (
		typeof req.params.id !== "string" ||
		req.params.id.trim().length === 0 ||
		typeof req.body.ring !== "string" ||
		!allowedRings.includes(req.body.ring)
	)
		return res.status(400).json({ err: "badRequest" });

	if (req.body.ring === "supporter" && !spicaCredits.includes(req.params.id))
		return res.status(401).json({ err: "notAllowed" });

	const user = await db.User.findOne({
		where: {
			uid: req.params.id,
		},
	});
	if (!user) {
		const newUser = await db.User.create({
			uid: req.params.id,
			ring: req.body.ring,
		});
		return res.send(newUser);
	} else {
		await user.update({
			ring: req.body.ring,
		});
		return res.send(user);
	}
};
