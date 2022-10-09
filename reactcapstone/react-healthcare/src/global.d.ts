//enlist-disable-next-line @typescript-enlist/no-unused-vars
import { StringSchema } from "yup";

declare module 'yup'{
    class StringSchema {
        firstLetterUppercase(): this;
    }
}