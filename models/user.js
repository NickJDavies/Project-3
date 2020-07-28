const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// has name, password, settings and statistics
const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  settings: String,
  statistics: {
    total: { type: Number, default: 0 },
    correct: { type: Number, default: 0 },
    intervalScores: {
      // mongoose doesnt make arrays without also giving ids, so this way it works properly, setting the array through quiz.js
      // PerfectUnison: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } },
      // MinorSecond: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } },
      // MajorSecond: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } },
      // MinorThird: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } },
      // MajorThird: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } },
      // PerfectFourth: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } },
      // Tritone: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } },
      // PerfectFifth: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } },
      // MinorSixth: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } },
      // MajorSixth: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } },
      // MinorSeventh: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } },
      // MajorSeventh: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } },
      // PerfectOctave: { correct: { type: Number, default: 0 }, total: { type: Number, default: 0 } }
    }
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
