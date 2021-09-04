import { PrismaClient } from '@prisma/client';
import { products } from './products';

const prisma = new PrismaClient();

async function main() {
  for (let product of products) {
    await prisma.product.create({ data: product });
  }
}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


// import {PrismaClient} from "@prisma/client";
// import * as dotenv from "dotenv";

// const prisma = new PrismaClient();

// async function main() {
//   dotenv.config();
//   console.log("Seeding...");

  
//    await prisma.product.create({
//     data: {
//       name: "SUP Board 14'",
//       description: "Inflatable SUP Board 14' in all new Blue color.",
//       price: 629.95,
//       sku: 'sku_sup_board14_blue',
//       published: true,
//     },
//   });
// }

// main()
//   .catch(e => {
//     console.log(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });