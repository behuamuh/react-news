import { INCREMENT } from "../const";

export default (count = 0, action) => {
  switch(action.type){
    case INCREMENT:
      return count += action.payload.value;
    default: return count;
  }
}