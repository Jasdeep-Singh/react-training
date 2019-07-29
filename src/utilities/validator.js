export default {
    isRequired: val => {
        console.log("val", val);
        return val && val.length;
    }
};


export const maxlength = val => val && val.length > 0 &&  val.length < 10;

