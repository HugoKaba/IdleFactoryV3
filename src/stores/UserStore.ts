import { defineStore } from 'pinia';
import { ref } from 'vue';
import { instance } from "../utils/axiosInstance.ts";
import {ObjectId} from "mongodb";
import {Achievement} from "../types/achievement.types.ts";


export const useUserStore = defineStore('user', () => {
    const user = ref()

    const loginUser = async (data: object) => {
        try {
            const response = await instance.post("/auth/login", data)
            user.value = response.data
        } catch (e) {
            console.error(e)
        }
    }

    const registerUser = async (data: object) => {
        try {
            const response = await instance.post("/auth/register", data)
            user.value = response.data
        } catch (e) {
            console.error(e)
        }
    }

    const getUserInfos = async () => {
        try {
            const response = await instance.get('/auth/me')
            user.value = response.data
        } catch (e) {
            console.error(e)
        }
    }

    const updateUserCredit = async (username: string, credit: number) => {
        try {
            await instance.post('/auth/update-credit', { username, credit });
            await getUserInfos();
        } catch (e) {
            console.error(e);
        }
    };

    const updateUserAchievements = async (achievement: Achievement,reward:number)=>{
        try{
            const currentUser = await instance.get('/auth/me')
            for(let i = 0; i < currentUser.data.achievements.length ;i++){
                if(currentUser.data.achievements[i].name == achievement.name){
                    return;
                }
            }
            const username = currentUser.data.name
            instance.post('/auth/update-credit',{username, reward})
            await updateUserCredit(currentUser.data.name,reward)
            instance.put("/achievements/update/me",{user:currentUser.data, achievement:achievement})

        }catch(e){
            console.error(e)
        }

    }

    const addUserAchievement = async (achievementName:any)=>{
        try{
            const response = await instance.get('/achievements/success/',{params:{achievementName}})
            const event = response.data.achievement
            const reward = response.data.achievement.reward
            await updateUserAchievements(event,reward)

            //update user event in db
            // const event = new ObjectId(eventId)
        }catch(e){
            console.error(e)
        }
    }

    return { user, getUserInfos, registerUser, loginUser, updateUserCredit, addUserAchievement }
}, {
    persist: {
        storage: localStorage,
    }
})