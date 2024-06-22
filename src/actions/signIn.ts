'use server';
import * as auth from '@/auth';
export async function signInWithGithub(){
    return auth.signIn('github');
}
export async function signInWithGoogle(){
    return auth.signIn('google');
}