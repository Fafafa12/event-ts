import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../lib/prisma"; // prisma client


// route: /api/city
// method: GET
export const getCities = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const cities = await prisma.city.findMany();
  res.status(200).json({
    status: "success",
    data: cities,
  });
});

// route : /api/city/:id
// method: GET
export const getOneCity = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const city = await prisma.city.findUnique({
    where: {
      id: Number(req.query.id),
    },
  });
  res.status(200).json({
    status: "success",
    data: city,
  });
});

// route: /api/city
// method: POST
export const createCity = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const city = await prisma.city.create({
    data: req.body,
  });
  res.status(201).json({
    status: "success",
    data: city,
  });
});

// route: /api/city/:id
// method: PUT
export const updateCity = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const city = await prisma.city.update({
    where: {
      id: Number(req.query.id),
    },
    data: req.body,
  });
  res.status(200).json({
    status: "success",
    data: city,
  });
});

// route: /api/city/:id
// method: DELETE
export const deleteCity = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const city = await prisma.city.delete({
    where: {
      id: Number(req.query.id),
    },
  });
  res.status(200).json({
    status: "success",
    data: city,
  });
});


