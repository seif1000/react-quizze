
export const  FIRST_QUEST = 'FIRST_QUEST';


export const FirstQuest = (id,type)=>{
    return {
        type:FIRST_QUEST,
        payload:{id,type}
    }
}


