const astrologers = [
  {
    name: "Arjun Kapoor",
    expertise: "Vedic Astrology",
    experience: 15,
    rating: 4.8,
    description: "Specializes in Vedic astrology and horoscopes.",
    charges: 200,
    language: ["Hindi", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Meera Singh",
    expertise: "Palmistry",
    experience: 10,
    rating: 4.5,
    description: "Expert in palmistry and hand readings.",
    charges: 150,
    language: ["Hindi", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Ravi Kumar",
    expertise: "Numerology",
    experience: 8,
    rating: 4.7,
    description: "Provides numerological insights and name corrections.",
    charges: 180,
    language: ["English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Sanjana Devi",
    expertise: "Tarot Reading",
    experience: 12,
    rating: 4.6,
    description: "Offers detailed tarot card readings.",
    charges: 220,
    language: ["Hindi"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Vikram Sharma",
    expertise: "Vedic Astrology",
    experience: 20,
    rating: 4.9,
    description: "Highly experienced in Vedic astrology.",
    charges: 250,
    language: ["Hindi", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Nisha Patel",
    expertise: "Palmistry",
    experience: 7,
    rating: 4.4,
    description: "Skilled in palmistry and future predictions.",
    charges: 170,
    language: ["Gujarati", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Amitabh Verma",
    expertise: "Numerology",
    experience: 9,
    rating: 4.3,
    description: "Expert in numerology and life path readings.",
    charges: 160,
    language: ["Hindi"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Priya Gupta",
    expertise: "Tarot Reading",
    experience: 6,
    rating: 4.2,
    description: "Provides tarot card readings for love and career.",
    charges: 140,
    language: ["Hindi", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Karan Thakur",
    expertise: "Vedic Astrology",
    experience: 18,
    rating: 4.7,
    description: "Offers detailed Vedic astrology readings.",
    charges: 210,
    language: ["Punjabi", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Sneha Das",
    expertise: "Palmistry",
    experience: 5,
    rating: 4.1,
    description: "Palmistry expert with accurate predictions.",
    charges: 130,
    language: ["Bengali", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Rajeshwari Iyer",
    expertise: "Numerology",
    experience: 14,
    rating: 4.8,
    description: "Experienced in numerology and name analysis.",
    charges: 240,
    language: ["Tamil", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Ajay Pandey",
    expertise: "Tarot Reading",
    experience: 11,
    rating: 4.5,
    description: "Specializes in tarot readings for personal growth.",
    charges: 190,
    language: ["Hindi"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Sunita Chauhan",
    expertise: "Vedic Astrology",
    experience: 13,
    rating: 4.6,
    description: "Expert in Vedic astrology and birth charts.",
    charges: 230,
    language: ["Hindi", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Deepak Mehta",
    expertise: "Palmistry",
    experience: 16,
    rating: 4.9,
    description: "Highly experienced in palmistry and predictions.",
    charges: 270,
    language: ["Hindi"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Anjali Sinha",
    expertise: "Numerology",
    experience: 4,
    rating: 4.0,
    description: "Offers numerology readings and consultations.",
    charges: 120,
    language: ["Hindi", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Manoj Reddy",
    expertise: "Tarot Reading",
    experience: 8,
    rating: 4.3,
    description: "Provides insights through tarot card readings.",
    charges: 160,
    language: ["Telugu", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Ritika Bansal",
    expertise: "Vedic Astrology",
    experience: 19,
    rating: 4.7,
    description: "Specialist in Vedic astrology and horoscope matching.",
    charges: 260,
    language: ["Hindi", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Vishal Patil",
    expertise: "Palmistry",
    experience: 3,
    rating: 3.9,
    description: "Skilled in palmistry and hand readings.",
    charges: 110,
    language: ["Marathi", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Sarita Bhatt",
    expertise: "Numerology",
    experience: 12,
    rating: 4.6,
    description: "Expert in numerology and life path analysis.",
    charges: 220,
    language: ["Hindi"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },
  {
    name: "Rahul Jain",
    expertise: "Tarot Reading",
    experience: 9,
    rating: 4.4,
    description: "Provides tarot readings for career and relationships.",
    charges: 180,
    language: ["Hindi", "English"],
    image: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  }
];

module.exports = astrologers;
