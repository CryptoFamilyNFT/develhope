import express, { Request, Response } from "express";
import Planets from "../models/planets";
import { IPlanets } from "../interfaces";
import { z } from "zod";

export const planetRouter = express.Router();

const planetSchema = z.object({
    id: z.number().int().positive().describe("Planet ID"),
    name: z.string().min(1).max(20).describe("Planet Name"),
});

planetRouter.use(express.json());

let planets: IPlanets[] = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];


{/* Get all planets */ }
planetRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const _planets = planets;
        res.status(200).send(_planets);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});

{/* Get planet by ID */ }
planetRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const planet = planets.find((planet) => planet.id === parseInt(id));

        if (planet) {
            res.status(200).send(planet);
        }
    } catch (error: any) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

{/* Create a new planet */ }
planetRouter.post("/", async (req: Request, res: Response) => {
    const { id, name } = req.body;
    try {
        const parsedBody = planetSchema.parse({id, name}); // Validate and parse the request body
        planets.push(parsedBody);
        res.status(201).send(planets); // code 201 Created
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            res.status(400).send(error.errors); // Validation error
        } else {
            res.status(500).send(error.message);
        }
    }
});

{/* Update planet from id */ }
planetRouter.put("/", async (req: Request, res: Response) => {
    const { id, name } = req.body;
    try {
        const planetData = planetSchema.parse({id, name});
        const planetIndex = planets.findIndex((planet) => planet.id === id);
        if (planetIndex === -1) {
            res.status(404).send("Planet not found");
            return;
        }
        planets[planetIndex] = { ...planets[planetIndex], ...planetData };
        res.status(200).send(planets[planetIndex]);
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            res.status(400).send(error.errors); // Validation error
        } else {
            res.status(500).send(error.message);
        }
    }
});

{/* Delete a planet */ }
planetRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req?.params?.id);
    
    try {
        const planetIndex = planets.findIndex((planet) => planet.id === id);
        if (planetIndex === -1) {
            res.status(404).send("Planet not found");
            return;
        }
        planets.splice(planetIndex, 1);
        res.status(200).send({ message: "Planet deleted successfully" });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});