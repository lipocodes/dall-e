//All the possible phrases in this app
import {surpriseMePrompts} from '../constants';
import FileSaver from 'file-saver';

export function getRandomPrompt (prompt){
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    //prevent identical 2 prompts in a row
    if(randomPrompt===prompt){
      return getRandomPrompt(prompt);
    }
    const randomPrompt = surpriseMePrompts[randomPrompt];
    return randomPrompt;
}

export async function downloadImage(_id,photo){
 FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

