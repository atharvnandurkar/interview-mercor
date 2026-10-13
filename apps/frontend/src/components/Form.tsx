import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "sonner";
import axios from "axios";
import { BACKEND_URL } from "../lib/config";

export function Form() {
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");

    async function onSubmit() {
        if (!github || !linkedin) {
            // TODO: Add more validation here
            toast("Please provie valid github and linkedin urls"
                // , {
                // description: "",
                // action: {
                //     // label: ""
                //     onClick: () => console.log("Undo"),
                // },
                // }
            );
            return;
        }

        await axios.post(`${BACKEND_URL}/api/v1/pre-interview`, {
            linkedin,
            github
        })
    }

    return <div className="h-screen w-screen flex justify-center items-center">
        <div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Ai Interview KickStart
            </h2>
            <div className="p-2">
                <Input placeholder="Linkedin URL" onChange={e => setLinkedin(e.target.value)} />
            </div>
            <div className="p-2">
                <Input placeholder="Github URL" onChange={e => setGithub(e.target.value)} />
            </div>
            <div className="flex justify-center">
                <Button onClick={onSubmit}>Start Interview</Button>
            </div>
        </div>

    </div>
} 