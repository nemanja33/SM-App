"use server"

import { redirect } from 'next/navigation'
import { getIronSessionData } from "@/lib/auth/session";


export async function ActionSignOut(): Promise<void> {
  const session = await getIronSessionData();

  session.destroy()
  redirect('/sign-in')
}

//revalidatePath(...) kada se doda novi item da bi se stranica opet generisala
// images SHOULD NOT be saved locally, but just a dev project