import userService from "../services/user.service.js";

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if ((!name, !email, !password)) {
      return res.status(400).send({ message: "input invalid" });
    }
    const user = await userService.create(req.body);

    if (!user) {
      return res.status(400).send({ message: "Error creating user" });
    }
    res.status(201).send({
      message: "user created sucessufuly",
      user: {
        name,
        email,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllUser();

    if (users.length === 0) {
      return res
        .status(400)
        .send({ message: "There are no registered clients!" });
    }

    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findClientBypK = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.findById(id);
    if (!id) {
      return res.status(400).send({ message: "id not found" });
    }

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { createUser, findAll, findClientBypK };
