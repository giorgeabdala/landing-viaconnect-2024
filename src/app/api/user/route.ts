import UserService from "@/app/api/infra/UserService";
import {NextResponse} from "next/server";

export async function POST(req: Request, res: Response) {
    try {
        console.log("/user/route");
        const body = await req.json();
        const userService = new UserService();
        const user = await userService.addUser(body);
        if (user.id) return NextResponse.json({message:"OK"});
        return NextResponse.error();
    } catch (e) {
        console.log("Erro: ", e);
        return NextResponse.error();
    }

}