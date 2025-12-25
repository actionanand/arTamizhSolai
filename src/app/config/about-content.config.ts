export interface AboutSection {
  heading: string;
  content: string;
}

export interface AboutLanguageContent {
  sections: AboutSection[];
}

export const aboutContent = {
  tamil: {
    sections: [
      {
        heading: 'முகப்புரை',
        content: 'ஆனந்த் ராஜாவின் தமிழ் சோலைக்கு வரவேற்கிறோம். இந்த வெளியீடு தமிழ் மொழியைக் கொண்டாடுவதற்கும், தமிழ் இலக்கியம், புராணங்கள் மற்றும் பண்பாட்டை வருங்காலத் தலைமுறையினருக்காகப் பாதுகாப்பதற்கும் எடுக்கப்பட்ட ஒரு முயற்சியாகும்.'
      },
      {
        heading: 'குறிப்பு',
        content: 'நான் தமிழ் மொழியின் மீது மிகுந்த பற்றும், இலக்கியத்தின் மீது ஆழ்ந்த ஆர்வமும் கொண்டவன். தமிழ் இலக்கியங்கள், காப்பியங்கள் மற்றும் நாட்டுப்புறவியலில் எனக்குத் தனி ஈடுபாடு உண்டு. சிலப்பதிகாரம், மணிமேகலை, திருக்குறள், அகநானூறு, புறநானூறு போன்ற காலத்தால் அழியாத காவியங்களும், பிற பண்டைய தமிழ் இலக்கியங்களும் எனது மனதையும் கற்பனைத் திறனையும் முழுமையாகக் கவர்ந்துள்ளன.'
      },
      {
        heading: 'தமிழ் இலக்கியம் மற்றும் சங்கப் பாடல்கள்',
        content: 'தமிழ் இலக்கியத்தின் செழுமையான பின்னணியையும் சங்கத் தமிழின் சிறப்பையும் ஆராய்வது எனது பயணத்தின் ஒரு முக்கியப் பகுதியாகும். நான் சங்கப் பாடல்கள், ஐங்குறுநூறு, பத்துப்பாட்டு, சிலப்பதிகாரம் மற்றும் பிற செவ்வியல் தமிழ் இலக்கியங்களை ஆழமாகப் பயின்று, அவற்றின் ஆழமான பொருளையும் கலாச்சார முக்கியத்துவத்தையும் புரிந்து கொள்ள முயற்சிக்கிறேன்.'
      },
      {
        heading: 'மொழி ஆர்வலர்',
        content: 'ஒரு தமிழ் மொழி ஆர்வலராக, பண்டைய அறிஞர்களும் புராணவியலாளர்களும் நமக்காக விட்டுச் சென்றுள்ள பொக்கிஷங்களால் நான் பெரிதும் ஈர்க்கப்பட்டுள்ளேன். மொழிகளே ஒரு பண்பாட்டின் இதயத்துடிப்பு என்றும், அவை மக்களின் மனதையும் ஆன்மாவையும் பிரதிபலிக்கின்றன என்றும் நான் நம்புகிறேன். என்னைப் பொறுத்தவரை, தமிழைப் புரிந்துகொள்வது என்பது திராவிட நாகரிகத்தின் சாரத்தைப் புரிந்துகொள்வதாகும்.'
      },
      {
        heading: 'இதர ஈடுபாடுகள்',
        content: 'இந்த வலைப்பதிவில், தமிழ் இலக்கியம், காப்பியங்கள், இலக்கணம், மொழியியல் மற்றும் தமிழ் சார்ந்த பிற தேடல்கள் மற்றும் சிந்தனைகள் குறித்த கட்டுரைகளை நீங்கள் காணலாம். உங்கள் கருத்துக்கள், ஆலோசனைகள் மற்றும் யோசனைகள் எப்போதும் வரவேற்கப்படுகின்றன! நீங்கள் ஒரு இலக்கியப் படைப்பைப் பற்றி விவாதிக்க விரும்பினாலும், ஒரு புதிய தலைப்பைப் பரிந்துரைக்க விரும்பினாலும் அல்லது ஒரு அழகான தமிழ்ச் சொற்றொடரைப் பகிர்ந்து கொள்ள விரும்பினாலும், உங்களிடமிருந்து அதைக் கேட்க நான் ஆவலாக இருக்கிறேன்.'
      },
      {
        heading: 'தொடர்புக்கு',
        content: 'தமிழ் இலக்கியம் குறித்து கேள்விகள் உள்ளதா? ஏதேனும் ஒரு காப்பியம் அல்லது செய்யுள் பற்றி விவாதிக்க வேண்டுமா? அல்லது சாதாரணமாக உரையாடவோ அல்லது ஒரு அழகான தமிழ்ச் சொல்லைப் பகிர்ந்து கொள்ளவோ விரும்புகிறீர்களா? கீழ்ப்பகுதியிலுள்ள தொடர்பு படிவத்தின் மூலமாகவோ அல்லது சமூக ஊடகங்கள் வாயிலாகவோ தாராளமாக என்னைத் தொடர்பு கொள்ளலாம். சக தமிழ் மொழி ஆர்வலர்களுடன் இணைந்திருக்க நான் ஆவலுடன் காத்திருக்கிறேன்!'
      }
    ]
  } as AboutLanguageContent,

  english: {
    sections: [
      {
        heading: 'Welcome',
        content: 'Welcome to AR Tamizh Solai! This publication is a humble effort to celebrate the Tamil language and preserve Tamil literature, mythology, and culture for generations to come.'
      },
      {
        heading: 'About Me',
        content: 'I\'m a passionate lover of the Tamil language and literature enthusiast. I have a keen interest in Tamil literature, epics, and folklore. The timeless classics like Silappatikaram, Manimekalai, Thirukkural, Agananooru, Purananuru, and other ancient Tamil works have captured my heart and imagination.'
      },
      {
        heading: 'Tamil Literature and Sangam Epics',
        content: 'Exploring the rich tapestry of Tamil literature and Sangam poetry is a significant part of my journey. I delve into Sangam poems, Aingerunuru, Pathupattu, Silappatikaram, and other classical Tamil texts, seeking to understand their profound meanings and cultural significance.'
      },
      {
        heading: 'Language Enthusiast',
        content: 'As a Tamil language enthusiast, I\'m fascinated by what the ancient scholars and mythologists have left us. I believe languages are the heartbeat of culture, and they reflect the mind and soul of a people. Understanding Tamil is, for me, understanding the essence of Dravidian civilization.'
      },
      {
        heading: 'Other Interests',
        content: 'On this blog, you\'ll find articles on Tamil literature, epics, grammar, linguistics, and other Tamil-related explorations and thoughts. Your feedback, suggestions, and ideas are always welcome! Whether you want to discuss a literary work, suggest a topic, or share a beautiful Tamil phrase, I\'d love to hear from you.'
      },
      {
        heading: 'Get in Touch',
        content: 'Have questions about Tamil literature? Want to discuss an epic or verse? Just want to chat or share a beautiful Tamil word? Feel free to reach out via the contact form in the footer or connect with me on social media. I look forward to connecting with fellow Tamil language lovers!'
      }
    ]
  } as AboutLanguageContent
};
