import SwagService from "@/app/api/infra/SwagService";
import {NextResponse} from "next/server";

export async function POST(req: Request, res: Response) {
    try {
        console.log("/swag/route");
        const body = await req.json();
        const swagService = new SwagService();
        const swag = await swagService.addSwag(body);
        if (swag.id) return NextResponse.json({message:"OK", swagId: swag.id});
        return NextResponse.error();
    } catch (e) {
        console.log("Erro: ", e);
        return NextResponse.error();
    }

}