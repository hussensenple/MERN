import Users from "../models/users.js";

// 1. Get all users with pagination
async function getUsers(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const users = await Users.find({}).skip(skip).limit(limit);
    const totalUsers = await Users.countDocuments({});

    return res.status(200).json({
      data: users,
      pagination: {
        totalItems: totalUsers,
        currentPage: page,
        totalPages: Math.ceil(totalUsers / limit),
        itemsPerPage: limit
      }
    });
  } catch (error) {
    next(error);
  }
}

// 2. Get user by id
async function getUserById(req, res, next) {
  try {
    const user = await Users.findOne({ _id: req.params.id });
    if (!user) {
       return res.status(404).json({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

// 3. Create user
async function createUser(req, res, next) {
  try {
    const newUser = await Users.create(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    next(error);
  }
}

// 4. Update user by id
async function updateUserById(req, res, next) {
  try {
    const updatedUser = await Users.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedUser) {
       return res.status(404).json({ message: "User not found" });
    }
    res.status(200).send(updatedUser);
  } catch (error) {
    next(error);
  }
}

// 5. Delete user by id
async function deleteUserById(req, res, next) {
  try {
    const deletedUser = await Users.findOneAndDelete({ _id: req.params.id });
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).send(deletedUser);
  } catch (error) {
    next(error);
  }
}

export { getUserById, getUsers, createUser, updateUserById, deleteUserById };