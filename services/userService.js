const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllUsers() {
  return prisma.user.findMany();
}

async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}

async function createUser(data) {
  return prisma.user.create({ data });
}

async function updateUser(id, data) {
  return prisma.user.update({
    where: { id },
    data
  });
}

async function deleteUser(id) {
  return prisma.user.delete({ where: { id } });
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
