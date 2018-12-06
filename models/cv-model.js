const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cvSchema = new Schema({
    candidatePic: { type: String },
    firstName: { type: String, required: true },
    LastName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^.+@.+\..+$/,
      }, 
    telNumber: { type: String },
    employmentStatus: { type: String },
    experience: [{
        companyName: { type: String, required: true },
        duration: { type: Number, required: true },
        tasks: { type: String, required: true },
    }],
    education: [{
        studyName: { type: String, required: true },
        schoolName: { type: String, required: true },
        duration: { type: Number, required: true },
    }],
    languages: {
        type: String,
        enum: ["Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian",
            "Azerbaijani", "Basque", "Belarusian", "Bengali", "Bosnian",
            "Bulgarian", "Catalan", "Cebuano", "Chinese", "Corsican", "Croatian",
            "Czech", "Danish", "Dutch", "English", "Esperanto", "Estonian", "Finnish",
            "French", "Frisian", "Galician", "Georgian", "German", "Greek", "Gujarati",
            "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hmong", "Hungarian",
            "Icelandic", "Igbo", "Indonesian", "Irish", "Italian", "Japanese", "Javanese",
            "Kannada", "Kazakh", "Khmer", "Korean", "Kurdish", "Kyrgyz", "Lao", "Latin",
            "Latvian", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay",
            "Malayalam", "Maltese", "Maori", "Marathi", "Mongolian", "Myanmar", "Nepali",
            "Norwegian", "Nyanja", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi",
            "Romanian", "Russian", "Samoan", "Scots Gaelic", "Serbian", "Sesotho", "Shona",
            "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese",
            "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Telugu", "Tigrinya",
            "Thai", "Turkish", "Ukrainian", "Urdu", "Uzbek", "Vietnamese",
            "Welsh", "Xhosa", "Yiddish", "Yoruba", "Zulu"],
        required: true,
        other: { type: String },
    },
    addAchievements: { type: String },
    skills: { type: String },
    verified: {
        type: Boolean,
        default: false,
        required: true,
    },
    encryptedPassword: { type: String },
    role: {
        type: String,
        enum: ["candidate", "admin", "recruiter", "association"],
        required: true,
        default: "candidate",
    }
}, {
        timestamps: true
    });

const Cv = mongoose.model("Cv", cvSchema);

module.exports = Cv;