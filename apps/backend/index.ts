import express from "express";
import { PreInterviewBody } from "./types";
import axios from "axios";

const app = express();
app.use(express.json());

app.post("/api/v1/pre-interview", async (req, res) => {
    const { success, data } = PreInterviewBody.safeParse(req.body);

    if(!success) {
        res.status(411).json({
            message: "Incorrect body"
        });
        return;
    }

    // TODO: URL can be very malformed, probably use an SLM here?
    const githubUrl = data.github.endsWith("/") ? data.github.slice(0, -1) : data.github; // https://github.com/atharvnandurkar
    const linkedinUrl = data.linkedin.endsWith("/") ? data.linkedin.slice(0, -1) : data.linkedin;

    const githubUsername = githubUrl.split("/").pop();
    const linkedinUsername = linkedinUrl.split("/").pop();

    const userRepos = await axios.get(`https://api.github.com/users/${githubUsername}/repos`);
    const filteredUserRepos = userRepos.data.map((x: any) => ({
        description: x.description,
        name: x.name,
        fullName: x.full_name,
        starCount: x.stargazers_count
    }));

    console.log(filteredUserRepos);

    // FIRST DIFFICUT PART == scraping linkedin for the user
    
    

})

app.listen(3001);
