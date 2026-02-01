const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [

    {
      tcId: 'Pos_Fun_001',
      name: 'Simple present tense statement',
      input: 'Mage T-shirt ekata salli gevanavadha?',
      expected: 'මගේ T-shirt එකට සල්ලි ගෙවනවද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Question about valuable plants at home garden',
      input: 'obagee gedhara vaththee aethi vatinaama shaaka monavaadha?',
      expected: 'ඔබගේ ගෙදර වත්තේ ඇති වටිනාම ශාක මොනවාද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'New Year greeting with extended wishes',
      input: 'laebuvaa vuu nava vasara aadharaNiiya sohoyuru sohoyuriyan siyalu dhenaatath, pavulvala haemootamath sithum paethum ituvana, nidhuk niroogii suvaya piruNu subama suba nava vasarak veevaa!!!',
      expected: 'ලැබුවා වූ නව වසර ආදරණීය සොහොයුරු සොහොයුරියන් සියලු දෙනාටත්, පවුල්වල හැමෝටමත් සිතුම් පැතුම් ඉටුවන, නිදුක් නිරෝගී සුවය පිරුණු සුබම සුබ නව වසරක් වේවා!!!',
      category: 'Greeting / wishes',
      grammar: 'Complex sentence',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_004',
      name: 'Two related activities in one sentence',
      input: 'mata oone dhee thamayi mQQ karannee... kavuruvath kiyana eeva nemeyi mQQ karannee…',
      expected: 'මට ඕනෙ දේ තමයි මං කරන්නේ... කවුරුවත් කියන ඒව නෙමෙයි මං කරන්නේ…',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Compound request with quantities',
      input: 'mata heta trip eka aran yanna kaeema jaathi 3k(bite jaathiyak, biscuits packet ekak, sandwiches paan) oone...thava mata ru.5000 k vath oone…',
      expected: 'මට හෙට trip එක අරන් යන්න කෑම ජාති 3ක්(bite ජාතියක්, biscuits packet එකක්, sandwiches පාන්) ඕනෙ...තව මට රු.5000 ක් වත් ඕනෙ…',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_006',
      name: 'Conditional sentence with alternatives',
      input: 'mee velaavee ubata call ekak gaththata avulak naedhdha bro...? naethnam rae 8ta vithara call ekak gannadha?',
      expected: 'මේ වෙලාවේ උබට call එකක් ගත්තට අවුලක් නැද්ද bro...? නැත්නම් රැ 8ට විතර call එකක් ගන්නද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_007',
      name: 'Reason-based inability statement',
      input: 'mata eyaava badhinna set naethi hindhaa thamayi ehee yanna baee kivvee…',
      expected: 'මට එයාව බදින්න සෙට් නැති හින්දා තමයි එහේ යන්න බෑ කිව්වේ…',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_008',
      name: 'Time-specific travel statement',
      input: 'Kandy bas eka, vaeliveeriyen udhee 7.30 venakota yanavaa.',
      expected: 'Kandy බස් එක, වැලිවේරියෙන් උදේ 7.30 වෙනකොට යනවා.',
      category: 'Daily language usage',
      grammar: 'Informative sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Technical explanation with value preservation',
      input: 'mema project eka saralava gathvita mii paeNivala moisture remove kiriima aramuNa vana athara mee saDHAhaa 40°C dhakvaa padhDhathiya rath kiriimata avashYA  namuth mii paeNivala guNaathmakaBhaavaya(pooShYA padhaarTha, ensayima) aarakShaa kiriimata nam padhDhathiyee uShNathvaya 40°Cta vadaa vaedi nokaLa yuthuya.',
      expected: 'මෙම project එක සරලව ගත්විට මී පැණිවල moisture remove කිරීම අරමුණ වන අතර මේ සඳහා 40°C දක්වා පද්ධතිය රත් කිරීමට අවශ්‍ය  නමුත් මී පැණිවල ගුණාත්මකභාවය(පෝෂ්‍ය පදාර්ථ, එන්සයිම) ආරක්ෂා කිරීමට නම් පද්ධතියේ උෂ්ණත්වය 40°Cට වඩා වැඩි නොකළ යුතුය.',
      category: 'Technical / academic language',
      grammar: 'Complex sentence',
      length: 'L'
    },
  
    {
      tcId: 'Pos_Fun_010',
      name: 'Profile image not displaying statement',
      input: 'Linkedin ekee magee profile image eka pennannee naee.',
      expected: 'Linkedin එකේ මගේ profile image එක පෙන්නන්නේ නෑ.',
      category: 'Daily language usage',
      grammar: 'Negative statement',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_011',
      name: 'Question about overseas life status',
      input: 'kohomadha oyaagee Italy jiivithee hodhayi dha?',
      expected: 'කොහොමද ඔයාගේ Italy ජීවිතේ හොදයි ද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_012',
      name: 'Future-oriented greeting',
      input: 'suBha upandhinayak veevaa!!!',
      expected: 'සුභ උපන්දිනයක් වේවා!!!',
      category: 'Greeting / wishes',
      grammar: 'Simple sentence',
      length: 'S'
    },
  
    {
      tcId: 'Pos_Fun_013',
      name: 'Urgent movement request to a location',
      input: 'ikmanata oyaalagee vaththa pahaLa kos gaha yatata enna.',
      expected: 'ඉක්මනට ඔයාලගේ වත්ත පහළ කොස් ගහ යටට එන්න.',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_014',
      name: 'Problem statement with direct command',
      input: 'mee video eka YouTube ekata upload karanna baenee...File type eka vaeradhi kiyanava machQQ, mokadha eekata karannee?',
      expected: 'මේ video එක YouTube එකට upload කරන්න බැනේ...File type එක වැරදි කියනව මචං, මොකද ඒකට කරන්නේ?',
      category: 'Technical / daily language mix',
      grammar: 'Complex sentence',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_015',
      name: 'Polite denial / clarification',
      input: 'api kaagevath salli mQQkolla kaala nae.',
      expected: 'අපි කාගෙවත් සල්ලි මංකොල්ල කාල නැ. ',
      category: 'Daily language usage',
      grammar: 'Negative statement',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_016',
      name: 'Unavailability statement',
      input: 'oyath ekak inna mata velaavak naee.',
      expected: 'ඔයත් එකක් ඉන්න මට වෙලාවක් නෑ.',
      category: 'Daily language usage',
      grammar: 'Negative statement',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Cannot statement',
      input: 'mata eeka karanna baee',
      expected: 'මට ඒක කරන්න බෑ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_018',
      name: 'Polite request to read comments without scolding',
      input: 'mata baninnee naethuva ee video ekata dhaalaa thiyena comments kiyavala inna.',
      expected: 'මට බනින්නේ නැතුව ඒ video එකට දාලා තියෙන comments කියවල ඉන්න.',
      category: 'Daily language usage',
      grammar: 'Polite request',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_019',
      name: 'Conditional offer with plural pronoun',
      input: 'mee Promo code eka use kaLoth ru. 5000ka Discount ekak api dhenavaa. ',
      expected: 'මේ Promo code එක use කළොත් රු. 5000ක Discount එකක් අපි දෙනවා.',
      category: 'Daily language usage',
      grammar: 'Conditional sentence',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_020',
      name: 'Inability due to technical issue',
      input: 'oyaa dhaemma link eken yana Google Drive ekee videos play vennee naee anee.',
      expected: 'ඔයා දැම්ම link එකෙන් යන Google Drive එකේ videos play වෙන්නේ නෑ අනේ.',
      category: 'Daily language usage',
      grammar: 'Negative statement',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_021',
      name: 'Mixed English with proper noun usage',
      input: 'oya NPP eken YouTube ekata dhaana posts, videos valata like, comments dhaannee doobi balakaayee vaeda karana kattiya.',
      expected: 'ඔය NPP එකෙන් YouTube එකට දාන posts, videos වලට like, comments දාන්නේ ඩෝබි බලකායේ වැඩ කරන කට්ටිය.',
      category: 'Daily language usage',
      grammar: 'Mixed English sentence',
      length: 'M'
    },
  
    {
      tcId: 'Pos_Fun_022',
      name: 'Colloquial interrogative warning request',
      input: 'mata kiyala oyaata tokkak aeNa ganna oonedha?',
      expected: 'මට කියල ඔයාට ටොක්කක් ඇණ ගන්න ඕනෙද?',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'M'
    }, 
    {
      tcId: 'Pos_Fun_023',
      name: 'Numeric quantity food request',
      input: 'mata 2kg cake ekak oone....',
      expected: 'මට 2kg cake එකක් ඕනෙ....',
      category: 'Daily language usage',
      grammar: 'Simple request',
      length: 'S'
    },   
    {
      tcId: 'Pos_Fun_024',
      name: 'Cause-and-effect complaint statement',
      input: 'uba karapu vaedee nisaa mata bas eka miss vuNaa mahaththayoo…',
      expected: 'උබ කරපු වැඩේ නිසා මට බස් එක miss වුණා මහත්තයෝ..',
      category: 'Daily language usage',
      grammar: 'Past tense with cause effect',
      length: 'M'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Mixed English–Sinhala word order issue',
      input: 'Oya today office da yanne.',
      expected: 'ඔයා අද office ද යන්නේ',
      category: 'Mixed-language tokenization',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Extended vowel informal greeting with spacing error',
      input: 'aneee oyaata kohomadha?',
      expected: 'අනේ ඔයාට කොහොමද?',
      category: 'Spacing error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Fully joined words without spacing',
      input: 'mataWhatsappmessageekakdhannaooni',
      expected: 'මට Whatsapp message එකක් දන්න ඕනි',
      category: 'Slang + spacing robustness',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Command sentence with missing line separation',
      input: 'Boss eka methana plug ekata set karala denna.',
      expected: 'Boss ඒක මෙතන plug එකට set කරල දෙන්න.',
      category: 'Line-break handling',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Test single character non-word input',
      input: 'Y',
      expected: 'y',
      category: 'Robustness validation',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Repetitive emphasis phrase causing ambiguity',
      input: 'tika tika loku wenne mokakda meka',
      expected: 'ටික ටික ලොකු වෙන්නෙ මොකක්ද මේක',
      category: 'Mixed-script robustness',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'English interjection in middle',
      input: 'wow! eeka hari da?',
      expected: 'wow! එක හරි ද?',
      category: 'Mixed Singlish + English',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Random capitalization',
      input: 'MaMa vAtUrA bOnAvAa',
      expected: 'මම වතුර බොනවා',
      category: 'Typographical error handling',
      grammar: 'Present tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: '.Test missing vowel',
      input: 'mata samavdenna',
      expected: 'මට සමාව දෙන්න',
      category: 'Typographical robustness',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Missing Spaces',
      input: 'api kaemakanna yanava',
      expected: 'අපි කෑම කන්න යනවා',
      category: 'Typographical error handling.',
      grammar: 'Simple sentence',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time output update while typing',
    input: 'api hari lassanai',
    partialInput: 'api hari',
    expectedFull: 'අපි හරි ලස්සනයි',
    category: 'Usability flow (real-time conversion)',
    grammar: 'descriptive sentence',
    length: 'S'
  },

  ui: {
  tcId: 'Neg_UI_001',
  name: 'No output update until full word entered',
  input: 'oya kohomada',
  partialInput: 'oya ko',
  expectedPartial: 'ඔයා කො',
  category: 'Real-time typing feedback',
  grammar: 'interrogative sentence (partial input)',
  length: 'S'
}

};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
