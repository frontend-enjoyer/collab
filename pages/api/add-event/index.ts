import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface Event {
    description: string;
    direction: string;
    email: string;
    experience_lvl: string;
    name: string;
    skills: string[];
    type: string;
    id: string;
}

// Path to the JSON file
const filePath = path.resolve('/utils/db.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const newEvent: Event = req.body;

        // Read existing events from the JSON file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.status(500).json({ message: 'Error reading events file' });
                return;
            }

            const events: Event[] = JSON.parse(data);

            // Add the new event to the list
            events.push(newEvent);

            // Write the updated list back to the JSON file
            fs.writeFile(filePath, JSON.stringify(events, null, 2), (err) => {
                if (err) {
                    res.status(500).json({ message: 'Error writing events file' });
                    return;
                }

                res.status(200).json({ message: 'Event added successfully' });
            });
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
