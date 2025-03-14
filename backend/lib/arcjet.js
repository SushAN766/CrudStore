import arcjet,{tokenBucket,shield,detectBot} from "@arcjet/node";
import "dotenv/config";

//init arcjet

export const aj= arcjet({
    key:process.env.ARCJET_KEY, 
    characteristics:["ip.src"],
    rules:[
        // shield protects your app from common attacks e.g. SQL injection ,XSS,CSRF attacks
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            // block bots that are not in the list
            allow:[
                "CATEGORY:SEARCH_ENGINE"
                //SEE THE FULL LIST OF CATEGORIES HERE: https://arcjet.io/docs/bot-detection/bot-categories
            ],
        }),
        // rate limit requests
        tokenBucket({
            mode:"LIVE",
            // 100 requests per minute
            refillRate:30,
            interval:5,
            capacity:20,
        }),
    ]
});
