const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      groceryListIngredients: [],
      isLoggedIn: true,
      message: null,
      productsResponseJSON: null,
      authtoken:
        "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJjaGVwdXAyLWEyYjVmN2RkOWQ1NDNjZjJlYzBjOTAyN2U1OTQwZDIzNjg1MjAwNDAzMDk4OTUwMzQwMSIsImV4cCI6MTY0ODAwNTA0NSwiaWF0IjoxNjQ4MDAzMjQwLCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6ImRiMjg4MWQ5LTMzMmItNWNiOS04MTg0LWI2YWM3Y2ZlZDk4ZiIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjQ4MDAzMjQ1OTE4ODQ3NjQ2LCJhenAiOiJjaGVwdXAyLWEyYjVmN2RkOWQ1NDNjZjJlYzBjOTAyN2U1OTQwZDIzNjg1MjAwNDAzMDk4OTUwMzQwMSJ9.Ti7WvcLPMj2XyJ919kRluqiC8oaiooOxjuvXAd4iKVUExbtEtrjK8m_zjJHSY6UUUG-xk5OikL-i6tbdZx8xI4nH919SeIbZZFgS8KDDJ7EpvXrK_BEGSq-TfvchyL3q9Y-JL4ohpHv96kaNWsJvVOu8paUo3sWsH9w57ciq1jc-zmVJr-bOgReJ5KFdVRR04fxd0FM91eqSxCWyraM4Svo49H1tz_cl4CLhlDsV060fT-OJzBOdJrZQCj5LPCrvOnA7EKOoT9wcneWq0CBIBH3tmnEX1sxTnpJsvOajVLDXe0zc47JsZMpn7TULx3ZtzqH8J3m_WCvy7Els0HY4HQ",
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      user: null,
      cuisine: [
        {
          name: "Italian",
          img: "https://th.bing.com/th/id/R.300c26c1f69e52cb0146af610f6822d8?rik=Q%2fdYu%2bf%2fxKeZJQ&pid=ImgRaw&r=0",
        },
        {
          name: "American",
          img: "https://tse4.mm.bing.net/th/id/OIP.JxJ9yTP5_CeSE4CahawdHgHaHY?pid=ImgDet&rs=1",
        },
        {
          name: "Mexican",
          img: "https://th.bing.com/th/id/R.252f7ce4ee506bbdad7fda7516e717f9?rik=eYfDFdJ02SjR4g&riu=http%3a%2f%2fcaliforniaburritosnh.com%2fwp-content%2fuploads%2f2019%2f06%2fFotolia_257265924_Subscription_Monthly_M.jpg&ehk=x7wvCbEcwZDx28pA7Za6tSJVT5fAFThthGjH0mhJcPk%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          name: "Chinese",
          img: "https://patch.com/img/cdn/users/22872568/2016/02/raw/20160256c37b1e22007.jpg",
        },
        {
          name: "Cajun",
          img: "https://th.bing.com/th/id/R.43b59e4905d01be034d1230dc513d1fe?rik=EvafNBYplXvQuQ&pid=ImgRaw&r=0",
        },
        {
          name: "Greek",
          img: "https://th.bing.com/th/id/R.08a4329cb8b9da97c6021e5a06e59acf?rik=JupNN0iNOkVBng&pid=ImgRaw&r=0",
        },
        {
          name: "Japanese",
          img: "https://tse1.mm.bing.net/th/id/OIP.gMtoeDG1xB87jJhtM5HATgHaKs?pid=ImgDet&rs=1",
        },
        {
          name: "African",
          img: "https://zululandobserver.co.za/wp-content/uploads/sites/56/2015/05/AFrican-food.jpg",
        },
        {
          name: "British",
          img: "https://th.bing.com/th/id/R.5bf2625c6e38172e3cb7444cfc07edb2?rik=8NWFnr5731pPNA&riu=http%3a%2f%2fblog.luulla.com%2fwp-content%2fuploads%2f2017%2f03%2fEnglish-Breakfast-.jpg&ehk=GO56MDDP5aaxpo8ZlKS8laszR5httfRSoXQBhlDKLi0%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          name: "Mediterranean",
          img: "https://th.bing.com/th/id/R.2e3a90fec623e412803f4f6d44e2aaf0?rik=fNNj8Y3oCoBhTg&pid=ImgRaw&r=0",
        },
        {
          name: "Southern",
          img: "https://tse1.mm.bing.net/th/id/OIP.9bXpj7-JkG5CpoVledq7CgHaKN?pid=ImgDet&rs=1",
        },
        {
          name: "Middle Eastern",
          img: "https://th.bing.com/th/id/R.8661155e570fab25d952ca4ff3d03a46?rik=4SN120Mi%2fKwwbQ&pid=ImgRaw&r=0",
        },
      ],
      trending2: [
        {
          vegetarian: true,
          vegan: false,
          glutenFree: true,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 6,
          gaps: "no",
          lowFodmap: false,
          aggregateLikes: 1,
          spoonacularScore: 61,
          healthScore: 15,
          creditsText:
            "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          license: "CC BY 3.0",
          sourceName: "Foodista",
          pricePerServing: 178.3,
          extendedIngredients: [
            {
              id: 1011256,
              aisle: "Milk, Eggs, Other Dairy",
              image: "plain-yogurt.jpg",
              consistency: "liquid",
              name: "non-fat greek yogurt",
              nameClean: "fat free greek yogurt",
              original: "1/2 cup non-fat greek yogurt",
              originalName: "non-fat greek yogurt",
              amount: 0.5,
              unit: "cup",
              meta: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 118.294,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 9236,
              aisle: "Produce",
              image: "peach.png",
              consistency: "solid",
              name: "peach",
              nameClean: "peach",
              original: "1/2 peach",
              originalName: "peach",
              amount: 0.5,
              unit: "",
              meta: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 12151,
              aisle: "Nuts;Savory Snacks",
              image: "pistachios.jpg",
              consistency: "solid",
              name: "pistachios",
              nameClean: "pistachio nuts",
              original: "1/4 cup pistachios, chopped",
              originalName: "pistachios, chopped",
              amount: 0.25,
              unit: "cup",
              meta: ["chopped"],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 59.147,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 2064,
              aisle: "Produce;Spices and Seasonings",
              image: "mint.jpg",
              consistency: "solid",
              name: "mint leaves",
              nameClean: "mint",
              original: "1 tsp mint leaves, chopped",
              originalName: "mint leaves, chopped",
              amount: 1,
              unit: "tsp",
              meta: ["chopped"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
                metric: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
              },
            },
          ],
          id: 1095731,
          title: "Peach and Pistachio Greek Yogurt Bowl",
          readyInMinutes: 5,
          servings: 1,
          sourceUrl:
            "https://www.foodista.com/recipe/SWMHZJWD/greek-yogurt-topped-with-peaches-an",
          image: "https://spoonacular.com/recipeImages/1095731-312x231.jpg",
          imageType: "jpg",
          nutrition: {
            nutrients: [
              {
                name: "Calories",
                amount: 265.39,
                unit: "kcal",
                percentOfDailyNeeds: 13.27,
              },
              {
                name: "Fat",
                amount: 14.53,
                unit: "g",
                percentOfDailyNeeds: 22.36,
              },
              {
                name: "Saturated Fat",
                amount: 1.83,
                unit: "g",
                percentOfDailyNeeds: 11.44,
              },
              {
                name: "Carbohydrates",
                amount: 19.69,
                unit: "g",
                percentOfDailyNeeds: 6.56,
              },
              {
                name: "Net Carbohydrates",
                amount: 15.39,
                unit: "g",
                percentOfDailyNeeds: 5.6,
              },
              {
                name: "Sugar",
                amount: 11.92,
                unit: "g",
                percentOfDailyNeeds: 13.24,
              },
              {
                name: "Cholesterol",
                amount: 5,
                unit: "mg",
                percentOfDailyNeeds: 1.67,
              },
              {
                name: "Sodium",
                amount: 46.09,
                unit: "mg",
                percentOfDailyNeeds: 2,
              },
              {
                name: "Protein",
                amount: 17.22,
                unit: "g",
                percentOfDailyNeeds: 34.44,
              },
              {
                name: "Phosphorus",
                amount: 303.25,
                unit: "mg",
                percentOfDailyNeeds: 30.32,
              },
              {
                name: "Vitamin B6",
                amount: 0.61,
                unit: "mg",
                percentOfDailyNeeds: 30.28,
              },
              {
                name: "Copper",
                amount: 0.48,
                unit: "mg",
                percentOfDailyNeeds: 23.78,
              },
              {
                name: "Manganese",
                amount: 0.42,
                unit: "mg",
                percentOfDailyNeeds: 21.25,
              },
              {
                name: "Vitamin B2",
                amount: 0.35,
                unit: "mg",
                percentOfDailyNeeds: 20.81,
              },
              {
                name: "Vitamin B1",
                amount: 0.31,
                unit: "mg",
                percentOfDailyNeeds: 20.51,
              },
              {
                name: "Selenium",
                amount: 13.63,
                unit: "µg",
                percentOfDailyNeeds: 19.47,
              },
              {
                name: "Fiber",
                amount: 4.3,
                unit: "g",
                percentOfDailyNeeds: 17.2,
              },
              {
                name: "Potassium",
                amount: 548.26,
                unit: "mg",
                percentOfDailyNeeds: 15.66,
              },
              {
                name: "Calcium",
                amount: 146.53,
                unit: "mg",
                percentOfDailyNeeds: 14.65,
              },
              {
                name: "Magnesium",
                amount: 54.29,
                unit: "mg",
                percentOfDailyNeeds: 13.57,
              },
              {
                name: "Vitamin B12",
                amount: 0.7,
                unit: "µg",
                percentOfDailyNeeds: 11.67,
              },
              {
                name: "Zinc",
                amount: 1.38,
                unit: "mg",
                percentOfDailyNeeds: 9.2,
              },
              {
                name: "Iron",
                amount: 1.54,
                unit: "mg",
                percentOfDailyNeeds: 8.53,
              },
              {
                name: "Vitamin E",
                amount: 1.26,
                unit: "mg",
                percentOfDailyNeeds: 8.43,
              },
              {
                name: "Vitamin A",
                amount: 380.36,
                unit: "IU",
                percentOfDailyNeeds: 7.61,
              },
              {
                name: "Folate",
                amount: 27.3,
                unit: "µg",
                percentOfDailyNeeds: 6.82,
              },
              {
                name: "Vitamin B3",
                amount: 1.22,
                unit: "mg",
                percentOfDailyNeeds: 6.08,
              },
              {
                name: "Vitamin B5",
                amount: 0.61,
                unit: "mg",
                percentOfDailyNeeds: 6.06,
              },
              {
                name: "Vitamin C",
                amount: 4.83,
                unit: "mg",
                percentOfDailyNeeds: 5.85,
              },
              {
                name: "Vitamin K",
                amount: 2.25,
                unit: "µg",
                percentOfDailyNeeds: 2.14,
              },
            ],
            properties: [
              {
                name: "Glycemic Index",
                amount: 58.25,
                unit: "",
              },
              {
                name: "Glycemic Load",
                amount: 3.55,
                unit: "",
              },
            ],
            flavonoids: [
              {
                name: "Cyanidin",
                amount: 3.69,
                unit: "mg",
              },
              {
                name: "Petunidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Delphinidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Malvidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Pelargonidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Peonidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Catechin",
                amount: 4.79,
                unit: "mg",
              },
              {
                name: "Epigallocatechin",
                amount: 1.41,
                unit: "mg",
              },
              {
                name: "Epicatechin",
                amount: 2.01,
                unit: "mg",
              },
              {
                name: "Epicatechin 3-gallate",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epigallocatechin 3-gallate",
                amount: 0.35,
                unit: "mg",
              },
              {
                name: "Theaflavin",
                amount: 0,
                unit: "",
              },
              {
                name: "Thearubigins",
                amount: 0,
                unit: "",
              },
              {
                name: "Eriodictyol",
                amount: 0.03,
                unit: "mg",
              },
              {
                name: "Hesperetin",
                amount: 0.01,
                unit: "mg",
              },
              {
                name: "Naringenin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Apigenin",
                amount: 0.01,
                unit: "mg",
              },
              {
                name: "Luteolin",
                amount: 0.01,
                unit: "mg",
              },
              {
                name: "Isorhamnetin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Kaempferol",
                amount: 0.17,
                unit: "mg",
              },
              {
                name: "Myricetin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Quercetin",
                amount: 0.94,
                unit: "mg",
              },
              {
                name: "Theaflavin-3,3'-digallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3'-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Gallocatechin",
                amount: 0,
                unit: "mg",
              },
            ],
            ingredients: [
              {
                id: 1011256,
                name: "non-fat greek yogurt",
                amount: 0.5,
                unit: "cup",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 7,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.53,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 141,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 3.27,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 5,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.11,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 36,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.33,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.28,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 4,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.21,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 61,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 11,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 3.64,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 15.1,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 136,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0.37,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0.7,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 111,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 9.9,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 10.3,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 3.64,
                    unit: "g",
                  },
                ],
              },
              {
                id: 9236,
                name: "peach",
                amount: 0.5,
                unit: "",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 4.5,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 1.13,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.17,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 2.25,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 91.5,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 6.29,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 3.08,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 9.75,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.11,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 244.5,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fluoride",
                    amount: 3,
                    unit: "mg",
                  },
                  {
                    name: "Copper",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.6,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 31.5,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 6,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 7.58,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 4.58,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 16.5,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.55,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0.2,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 3,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 1.58,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0.26,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.68,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 6.45,
                    unit: "g",
                  },
                ],
              },
              {
                id: 12151,
                name: "pistachios",
                amount: 0.25,
                unit: "cup",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 15.68,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 3.17,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.68,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.27,
                    unit: "mg",
                  },
                  {
                    name: "Potassium",
                    amount: 315.19,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 2.36,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 1.71,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 1.72,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.31,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.16,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 7.32,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 127.61,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 4.23,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fluoride",
                    amount: 1.05,
                    unit: "mg",
                  },
                  {
                    name: "Copper",
                    amount: 0.4,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.37,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.4,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 172.82,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 37.21,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 8.46,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.52,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 150.68,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.71,
                    unit: "mg",
                  },
                  {
                    name: "Fat",
                    amount: 13.96,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 32.29,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 2.15,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 1.21,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 6.23,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 5.29,
                    unit: "g",
                  },
                ],
              },
              {
                id: 2064,
                name: "mint leaves",
                amount: 1,
                unit: "tsp",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 0.11,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Potassium",
                    amount: 0.57,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 4.25,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 0.07,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.24,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.01,
                    unit: "g",
                  },
                ],
              },
            ],
            caloricBreakdown: {
              percentProtein: 24.74,
              percentFat: 46.97,
              percentCarbs: 28.29,
            },
            weightPerServing: {
              amount: 206,
              unit: "g",
            },
          },
          summary:
            'Peach and Pistachio Greek Yogurt Bowl is a <b>gluten free, lacto ovo vegetarian, and primal</b> recipe with 1 servings. For <b>$1.78 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. One serving contains <b>272 calories</b>, <b>19g of protein</b>, and <b>15g of fat</b>. A mixture of non-fat greek yogurt, peach, pistachios, and a handful of other ingredients are all it takes to make this recipe so flavorful. 1 person has tried and liked this recipe. Only a few people really liked this main course. This recipe is typical of Mediterranean cuisine. From preparation to the plate, this recipe takes about <b>5 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 59%</b>. This score is solid. Similar recipes are <a href="https://spoonacular.com/recipes/dark-chocolate-orange-pistachio-greek-yogurt-cups-for-breakfastfordinner-sundaysupper-493011">Dark Chocolate, Orange & Pistachio Greek Yogurt Cups for #BreakfastforDinner #SundaySupper</a>, <a href="https://spoonacular.com/recipes/one-bowl-greek-yogurt-pumpkin-bread-800384">one bowl greek yogurt pumpkin bread</a>, and <a href="https://spoonacular.com/recipes/bagel-and-lox-greek-yogurt-bowl-1062027">Bagel and Lox Greek Yogurt Bowl</a>.',
          cuisines: ["Mediterranean", "European", "Greek"],
          dishTypes: ["lunch", "main course", "main dish", "dinner"],
          diets: ["gluten free", "lacto ovo vegetarian", "primal"],
          occasions: [],
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: "Scoop yogurt into a serving bowl.",
                  ingredients: [
                    {
                      id: 1116,
                      name: "yogurt",
                      localizedName: "yogurt",
                      image: "plain-yogurt.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 404783,
                      name: "bowl",
                      localizedName: "bowl",
                      image: "bowl.jpg",
                    },
                  ],
                },
                {
                  number: 2,
                  step: "Slice peach horizontal, carving out center seed. Or slice vertically to top yogurt.",
                  ingredients: [
                    {
                      id: 1116,
                      name: "yogurt",
                      localizedName: "yogurt",
                      image: "plain-yogurt.jpg",
                    },
                    {
                      id: 9236,
                      name: "peach",
                      localizedName: "peach",
                      image: "peach.png",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 3,
                  step: "Top yogurt with peaches, pistachios, and mint..... enjoy!",
                  ingredients: [
                    {
                      id: 12151,
                      name: "pistachio nuts",
                      localizedName: "pistachio nuts",
                      image: "pistachios.jpg",
                    },
                    {
                      id: 9236,
                      name: "peach",
                      localizedName: "peach",
                      image: "peach.png",
                    },
                    {
                      id: 1116,
                      name: "yogurt",
                      localizedName: "yogurt",
                      image: "plain-yogurt.jpg",
                    },
                    {
                      id: 2064,
                      name: "mint",
                      localizedName: "mint",
                      image: "mint.jpg",
                    },
                  ],
                  equipment: [],
                },
              ],
            },
          ],
          spoonacularSourceUrl:
            "https://spoonacular.com/peach-and-pistachio-greek-yogurt-bowl-1095731",
          usedIngredientCount: 0,
          missedIngredientCount: 4,
          missedIngredients: [
            {
              id: 1011256,
              amount: 0.5,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "non-fat greek yogurt",
              original: "1/2 cup non-fat greek yogurt",
              originalName: "non-fat greek yogurt",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/plain-yogurt.jpg",
            },
            {
              id: 9236,
              amount: 0.5,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "peach",
              original: "1/2 peach",
              originalName: "peach",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/peach.png",
            },
            {
              id: 12151,
              amount: 0.25,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Nuts;Savory Snacks",
              name: "pistachios",
              original: "1/4 cup pistachios, chopped",
              originalName: "pistachios, chopped",
              meta: ["chopped"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/pistachios.jpg",
            },
            {
              id: 2064,
              amount: 1,
              unit: "tsp",
              unitLong: "teaspoon",
              unitShort: "tsp",
              aisle: "Produce;Spices and Seasonings",
              name: "mint leaves",
              original: "1 tsp mint leaves, chopped",
              originalName: "mint leaves, chopped",
              meta: ["chopped"],
              image: "https://spoonacular.com/cdn/ingredients_100x100/mint.jpg",
            },
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: [],
        },
        {
          vegetarian: true,
          vegan: false,
          glutenFree: true,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 10,
          gaps: "no",
          lowFodmap: false,
          preparationMinutes: 15,
          cookingMinutes: 0,
          aggregateLikes: 1,
          spoonacularScore: 8,
          healthScore: 0,
          creditsText: "Jen West",
          sourceName: "Pink When",
          pricePerServing: 37.05,
          extendedIngredients: [
            {
              id: 20040,
              aisle: "Pasta and Rice",
              image: "uncooked-brown-rice.png",
              consistency: "solid",
              name: "brown rice",
              nameClean: "brown rice",
              original: "2 ounces brown fondant",
              originalName: "brown fondant",
              amount: 2,
              unit: "ounces",
              meta: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "oz",
                  unitLong: "ounces",
                },
                metric: {
                  amount: 56.699,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 1001,
              aisle: "Milk, Eggs, Other Dairy",
              image: "butter-sliced.jpg",
              consistency: "solid",
              name: "butter",
              nameClean: "butter",
              original: "1/2 cup butter, softened",
              originalName: "butter, softened",
              amount: 0.5,
              unit: "cup",
              meta: ["softened"],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 118.294,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 19074,
              aisle: "Nut butters, Jams, and Honey;Sweet Snacks;Frozen;Baking",
              image: "soft-caramels.jpg",
              consistency: "solid",
              name: "caramel candies",
              nameClean: "caramel",
              original: "12 cubed caramel candies",
              originalName: "cubed caramel candies",
              amount: 12,
              unit: "",
              meta: ["cubed"],
              measures: {
                us: {
                  amount: 12,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 12,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 19336,
              aisle: "Baking",
              image: "powdered-sugar.jpg",
              consistency: "solid",
              name: "confectioners' sugar",
              nameClean: "powdered sugar",
              original: "2 cups confectioners' sugar",
              originalName: "confectioners' sugar",
              amount: 2,
              unit: "cups",
              meta: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 473.176,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 1077,
              aisle: "Milk, Eggs, Other Dairy",
              image: "milk.png",
              consistency: "liquid",
              name: "milk",
              nameClean: "milk",
              original: "2 tablespoons milk",
              originalName: "milk",
              amount: 2,
              unit: "tablespoons",
              meta: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
                metric: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
              },
            },
            {
              id: 2050,
              aisle: "Baking",
              image: "vanilla-extract.jpg",
              consistency: "liquid",
              name: "vanilla",
              nameClean: "vanilla extract",
              original: "12 vanilla cupcakes, prepared",
              originalName: "vanilla cupcakes, prepared",
              amount: 12,
              unit: "",
              meta: ["prepared"],
              measures: {
                us: {
                  amount: 12,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 12,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 2050,
              aisle: "Baking",
              image: "vanilla-extract.jpg",
              consistency: "liquid",
              name: "vanilla extract",
              nameClean: "vanilla extract",
              original: "1 teaspoon vanilla extract",
              originalName: "vanilla extract",
              amount: 1,
              unit: "teaspoon",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
                metric: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
              },
            },
          ],
          id: 1017375,
          title: "National Hotdog Day Official Hotdog Cupcakes",
          readyInMinutes: 15,
          servings: 12,
          sourceUrl:
            "https://www.pinkwhen.com/national-hotdog-day-official-hotdog-cupcakes/",
          image: "https://spoonacular.com/recipeImages/1017375-312x231.jpg",
          imageType: "jpg",
          nutrition: {
            nutrients: [
              {
                name: "Calories",
                amount: 206.26,
                unit: "kcal",
                percentOfDailyNeeds: 10.31,
              },
              {
                name: "Fat",
                amount: 8.69,
                unit: "g",
                percentOfDailyNeeds: 13.37,
              },
              {
                name: "Saturated Fat",
                amount: 5.18,
                unit: "g",
                percentOfDailyNeeds: 32.38,
              },
              {
                name: "Carbohydrates",
                amount: 31.55,
                unit: "g",
                percentOfDailyNeeds: 10.52,
              },
              {
                name: "Net Carbohydrates",
                amount: 31.39,
                unit: "g",
                percentOfDailyNeeds: 11.41,
              },
              {
                name: "Sugar",
                amount: 26.4,
                unit: "g",
                percentOfDailyNeeds: 29.34,
              },
              {
                name: "Cholesterol",
                amount: 21.34,
                unit: "mg",
                percentOfDailyNeeds: 7.11,
              },
              {
                name: "Sodium",
                amount: 86.98,
                unit: "mg",
                percentOfDailyNeeds: 3.78,
              },
              {
                name: "Alcohol",
                amount: 0.46,
                unit: "g",
                percentOfDailyNeeds: 2.55,
              },
              {
                name: "Protein",
                amount: 0.98,
                unit: "g",
                percentOfDailyNeeds: 1.96,
              },
              {
                name: "Manganese",
                amount: 0.18,
                unit: "mg",
                percentOfDailyNeeds: 9.1,
              },
              {
                name: "Vitamin A",
                amount: 244.61,
                unit: "IU",
                percentOfDailyNeeds: 4.89,
              },
              {
                name: "Phosphorus",
                amount: 28.75,
                unit: "mg",
                percentOfDailyNeeds: 2.87,
              },
              {
                name: "Vitamin B2",
                amount: 0.04,
                unit: "mg",
                percentOfDailyNeeds: 2.32,
              },
              {
                name: "Magnesium",
                amount: 9.11,
                unit: "mg",
                percentOfDailyNeeds: 2.28,
              },
              {
                name: "Vitamin B1",
                amount: 0.03,
                unit: "mg",
                percentOfDailyNeeds: 2.12,
              },
              {
                name: "Calcium",
                amount: 21.05,
                unit: "mg",
                percentOfDailyNeeds: 2.11,
              },
              {
                name: "Vitamin E",
                amount: 0.27,
                unit: "mg",
                percentOfDailyNeeds: 1.78,
              },
              {
                name: "Vitamin B6",
                amount: 0.03,
                unit: "mg",
                percentOfDailyNeeds: 1.59,
              },
              {
                name: "Vitamin B5",
                amount: 0.15,
                unit: "mg",
                percentOfDailyNeeds: 1.53,
              },
              {
                name: "Potassium",
                amount: 42.46,
                unit: "mg",
                percentOfDailyNeeds: 1.21,
              },
              {
                name: "Vitamin B3",
                amount: 0.23,
                unit: "mg",
                percentOfDailyNeeds: 1.15,
              },
              {
                name: "Zinc",
                amount: 0.16,
                unit: "mg",
                percentOfDailyNeeds: 1.08,
              },
            ],
            properties: [
              {
                name: "Glycemic Index",
                amount: 17.65,
                unit: "",
              },
              {
                name: "Glycemic Load",
                amount: 7.07,
                unit: "",
              },
            ],
            flavonoids: [
              {
                name: "Cyanidin",
                amount: 0,
                unit: "",
              },
              {
                name: "Petunidin",
                amount: 0,
                unit: "",
              },
              {
                name: "Delphinidin",
                amount: 0,
                unit: "",
              },
              {
                name: "Malvidin",
                amount: 0,
                unit: "",
              },
              {
                name: "Pelargonidin",
                amount: 0,
                unit: "",
              },
              {
                name: "Peonidin",
                amount: 0,
                unit: "",
              },
              {
                name: "Catechin",
                amount: 0,
                unit: "",
              },
              {
                name: "Epigallocatechin",
                amount: 0,
                unit: "",
              },
              {
                name: "Epicatechin",
                amount: 0,
                unit: "",
              },
              {
                name: "Epicatechin 3-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Epigallocatechin 3-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin",
                amount: 0,
                unit: "",
              },
              {
                name: "Thearubigins",
                amount: 0,
                unit: "",
              },
              {
                name: "Eriodictyol",
                amount: 0,
                unit: "",
              },
              {
                name: "Hesperetin",
                amount: 0,
                unit: "",
              },
              {
                name: "Naringenin",
                amount: 0,
                unit: "",
              },
              {
                name: "Apigenin",
                amount: 0,
                unit: "",
              },
              {
                name: "Luteolin",
                amount: 0,
                unit: "",
              },
              {
                name: "Isorhamnetin",
                amount: 0,
                unit: "",
              },
              {
                name: "Kaempferol",
                amount: 0,
                unit: "",
              },
              {
                name: "Myricetin",
                amount: 0,
                unit: "",
              },
              {
                name: "Quercetin",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3,3'-digallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3'-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Gallocatechin",
                amount: 0,
                unit: "",
              },
            ],
            ingredients: [
              {
                id: 20040,
                name: "brown rice",
                amount: 0.17,
                unit: "ounces",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 0.94,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.16,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.1,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Potassium",
                    amount: 12.66,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.19,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.18,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.2,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 17.1,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 6.76,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 3.6,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 12.47,
                    unit: "mg",
                  },
                  {
                    name: "Fat",
                    amount: 0.13,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Calcium",
                    amount: 1.56,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.35,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 3.44,
                    unit: "g",
                  },
                ],
              },
              {
                id: 1001,
                name: "butter",
                amount: 0.04,
                unit: "cup",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 0.28,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.66,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 2.27,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 20.34,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 4.86,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 60.82,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0.31,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 1.99,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 236.36,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.29,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fluoride",
                    amount: 0.26,
                    unit: "mg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 67.82,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.19,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 1.78,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 2.27,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.22,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 7.67,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0.02,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 2.27,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.09,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.08,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.01,
                    unit: "g",
                  },
                ],
              },
              {
                id: 19074,
                name: "caramel candies",
                amount: 1,
                unit: "",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 0.4,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.18,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 21.4,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 6.55,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0.7,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.25,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 24.5,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.15,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 4.2,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.35,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fluoride",
                    amount: 2.7,
                    unit: "mg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 38.2,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 1.7,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 7.7,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.8,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 11.4,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0.81,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0.03,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 13.8,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.18,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.46,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 7.7,
                    unit: "g",
                  },
                ],
              },
              {
                id: 19336,
                name: "confectioners' sugar",
                amount: 0.17,
                unit: "cups",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 0.4,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 19.56,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.4,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 77.8,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 19.96,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.2,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.12,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 19.96,
                    unit: "g",
                  },
                ],
              },
              {
                id: 1077,
                name: "milk",
                amount: 0.17,
                unit: "tablespoons",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.01,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 3.75,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.12,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0.3,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.95,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 4.05,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 1.5,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.3,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0.03,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.12,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.45,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 2.53,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0.08,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0.01,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 3.08,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.05,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.08,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.12,
                    unit: "g",
                  },
                ],
              },
              {
                id: 2050,
                name: "vanilla",
                amount: 1,
                unit: "",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 1.48,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.13,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0.34,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 2.88,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.13,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.11,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.13,
                    unit: "g",
                  },
                ],
              },
              {
                id: 2050,
                name: "vanilla extract",
                amount: 0.08,
                unit: "teaspoon",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 0.49,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0.11,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 0.96,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.04,
                    unit: "g",
                  },
                ],
              },
            ],
            caloricBreakdown: {
              percentProtein: 1.88,
              percentFat: 37.54,
              percentCarbs: 60.58,
            },
            weightPerServing: {
              amount: 48,
              unit: "g",
            },
          },
          summary:
            'National Hotdog Day Official Hotdog Cupcakes takes approximately <b>15 minutes</b> from beginning to end. For <b>37 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. This recipe makes 12 servings with <b>206 calories</b>, <b>1g of protein</b>, and <b>9g of fat</b> each. 1 person were glad they tried this recipe. It works well as an inexpensive dessert. It is a good option if you\'re following a <b>gluten free and lacto ovo vegetarian</b> diet. It is brought to you by Pink When. Only a few people really liked this American dish. A mixture of vanilla cupcakes, vanillan extract, butter, and a handful of other ingredients are all it takes to make this recipe so delicious. Overall, this recipe earns a <b>spectacular spoonacular score of 83%</b>. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/hotdog-bean-soup-526786">Hotdog Bean Soup</a>, <a href="https://spoonacular.com/recipes/hotdog-pasties-with-sticky-onions-224400">Hotdog pasties with sticky onions</a>, and <a href="https://spoonacular.com/recipes/grilled-hotdog-skewers-with-creamy-avocado-dip-21746">Grilled Hotdog Skewers With Creamy Avocado Dip</a>.',
          cuisines: ["American"],
          dishTypes: ["side dish"],
          diets: ["gluten free", "lacto ovo vegetarian"],
          occasions: [],
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: 'Bake your cupcakes according to package or recipe directions and allow them to cool completely.In a stand mixer, beat the sugar, butter, milk, and vanilla on medium speed and gradually increase to high. Beat until a semi-stiff consistency has formed.Ice each one of your cupcakes with a frosting bag.Line a baking sheet with wax paper and start rolling out the fondant into small 1/4 inch spheres. Then roll them into cylinders with rounded ends - these will be your "hot dogs".Start kneading each caramel candy and flatten each one to be 1 inch in diameter - it will act as your "hot dog bun".Then, place your "hot dog" in the center of your flattened caramel candy and wrap it to look just like a hot dog. Decorate the top with red and yellow frosting to look like ketchup and mustard and place on top of each cupcake.',
                  ingredients: [
                    {
                      id: 19074,
                      name: "caramel candy",
                      localizedName: "caramel candy",
                      image: "soft-caramels.jpg",
                    },
                    {
                      id: 10018350,
                      name: "hot dog bun",
                      localizedName: "hot dog bun",
                      image: "hot-dog-buns.jpg",
                    },
                    {
                      id: 18139,
                      name: "cupcakes",
                      localizedName: "cupcakes",
                      image: "plain-cupcake.jpg",
                    },
                    {
                      id: 19230,
                      name: "frosting",
                      localizedName: "frosting",
                      image: "vanilla-frosting.png",
                    },
                    {
                      id: 21118,
                      name: "hot dogs",
                      localizedName: "hot dogs",
                      image: "hotdogs.png",
                    },
                    {
                      id: 0,
                      name: "fondant icing",
                      localizedName: "fondant icing",
                      image: "frosting-or-icing.png",
                    },
                    {
                      id: 11935,
                      name: "ketchup",
                      localizedName: "ketchup",
                      image: "ketchup.png",
                    },
                    {
                      id: 2046,
                      name: "mustard",
                      localizedName: "mustard",
                      image: "regular-mustard.jpg",
                    },
                    {
                      id: 1052050,
                      name: "vanilla",
                      localizedName: "vanilla",
                      image: "vanilla.jpg",
                    },
                    {
                      id: 1001,
                      name: "butter",
                      localizedName: "butter",
                      image: "butter-sliced.jpg",
                    },
                    {
                      id: 19335,
                      name: "sugar",
                      localizedName: "sugar",
                      image: "sugar-in-bowl.png",
                    },
                    {
                      id: 1077,
                      name: "milk",
                      localizedName: "milk",
                      image: "milk.png",
                    },
                    {
                      id: 0,
                      name: "roll",
                      localizedName: "roll",
                      image: "dinner-yeast-rolls.jpg",
                    },
                    {
                      id: 10018364,
                      name: "wrap",
                      localizedName: "wrap",
                      image: "flour-tortilla.jpg",
                    },
                    {
                      id: 10014412,
                      name: "ice",
                      localizedName: "ice",
                      image: "ice-cubes.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 404727,
                      name: "baking sheet",
                      localizedName: "baking sheet",
                      image: "baking-sheet.jpg",
                    },
                    {
                      id: 404665,
                      name: "stand mixer",
                      localizedName: "stand mixer",
                      image: "stand-mixer.jpg",
                    },
                    {
                      id: 404739,
                      name: "wax paper",
                      localizedName: "wax paper",
                      image: "wax-paper.jpg",
                    },
                    {
                      id: 404784,
                      name: "oven",
                      localizedName: "oven",
                      image: "oven.jpg",
                    },
                  ],
                },
                {
                  number: 2,
                  step: "Serve at a fun summer party and enjoy!",
                  ingredients: [],
                  equipment: [],
                },
              ],
            },
          ],
          spoonacularSourceUrl:
            "https://spoonacular.com/national-hotdog-day-official-hotdog-cupcakes-1017375",
          usedIngredientCount: 0,
          missedIngredientCount: 5,
          missedIngredients: [
            {
              id: 20040,
              amount: 2,
              unit: "ounces",
              unitLong: "ounces",
              unitShort: "oz",
              aisle: "Pasta and Rice",
              name: "brown rice",
              original: "2 ounces brown fondant",
              originalName: "brown fondant",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/uncooked-brown-rice.png",
            },
            {
              id: 1001,
              amount: 0.5,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "butter",
              original: "1/2 cup butter, softened",
              originalName: "butter, softened",
              meta: ["softened"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
            },
            {
              id: 19074,
              amount: 12,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Nut butters, Jams, and Honey;Sweet Snacks;Frozen;Baking",
              name: "caramel candies",
              original: "12 cubed caramel candies",
              originalName: "cubed caramel candies",
              meta: ["cubed"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/soft-caramels.jpg",
            },
            {
              id: 1077,
              amount: 2,
              unit: "tablespoons",
              unitLong: "tablespoons",
              unitShort: "Tbsp",
              aisle: "Milk, Eggs, Other Dairy",
              name: "milk",
              original: "2 tablespoons milk",
              originalName: "milk",
              meta: [],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
            },
            {
              id: 2050,
              amount: 12,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Baking",
              name: "vanilla",
              original: "12 vanilla cupcakes, prepared",
              originalName: "vanilla cupcakes, prepared",
              meta: ["prepared"],
              extendedName: "cooked vanilla bean",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg",
            },
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: [],
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: true,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 7,
          gaps: "no",
          lowFodmap: false,
          aggregateLikes: 1,
          spoonacularScore: 82,
          healthScore: 50,
          creditsText:
            "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          license: "CC BY 3.0",
          sourceName: "Foodista",
          pricePerServing: 310.22,
          extendedIngredients: [
            {
              id: 10115076,
              aisle: "Seafood",
              image: "salmon.png",
              consistency: "solid",
              name: "salmon filet",
              nameClean: "salmon fillets",
              original:
                "500 g salmon filet, fresh or frozen, skinless and boneless",
              originalName:
                "salmon filet, fresh or frozen, skinless and boneless",
              amount: 500,
              unit: "g",
              meta: ["fresh", "boneless", "skinless"],
              measures: {
                us: {
                  amount: 1.102,
                  unitShort: "lb",
                  unitLong: "pounds",
                },
                metric: {
                  amount: 500,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 20002,
              aisle: "Pasta and Rice;Health Foods",
              image: "amaranth.jpg",
              consistency: "solid",
              name: "amaranth",
              nameClean: "cooked amaranth",
              original: "1 cup cooked amaranth (rinsed and strained well)",
              originalName: "cooked amaranth (rinsed and strained well)",
              amount: 1,
              unit: "cup",
              meta: ["rinsed", "cooked", "well", "( and strained )"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "cup",
                  unitLong: "cup",
                },
                metric: {
                  amount: 236.588,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 2055,
              aisle: "Condiments",
              image: "horseradish-sauce.jpg",
              consistency: "liquid",
              name: "horseradish sauce",
              nameClean: "horseradish sauce",
              original: "1 heaped tablespoon horseradish sauce",
              originalName: "horseradish sauce",
              amount: 1,
              unit: "tablespoon",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
                metric: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
              },
            },
            {
              id: 2054,
              aisle: "Canned and Jarred",
              image: "capers.jpg",
              consistency: "solid",
              name: "capers",
              nameClean: "capers",
              original: "3 tablespoons capers",
              originalName: "capers",
              amount: 3,
              unit: "tablespoons",
              meta: [],
              measures: {
                us: {
                  amount: 3,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
                metric: {
                  amount: 3,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
              },
            },
            {
              id: 18079,
              aisle: "Pasta and Rice",
              image: "breadcrumbs.jpg",
              consistency: "solid",
              name: "breadcrumbs",
              nameClean: "breadcrumbs",
              original:
                "2 tablespoons breadcrumbs for coating and 2 for adding to the burger mixture",
              originalName:
                "breadcrumbs for coating and 2 for adding to the burger mixture",
              amount: 2,
              unit: "tablespoons",
              meta: ["for coating and 2 for adding to the burger mixture\r"],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
                metric: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
              },
            },
            {
              id: 1012047,
              aisle: "Spices and Seasonings",
              image: "salt.jpg",
              consistency: "solid",
              name: "sea salt",
              nameClean: "coarse sea salt",
              original:
                "3/4 teaspoon fine sea salt, plus plenty of black pepper",
              originalName: "fine sea salt, plus plenty of black pepper",
              amount: 0.75,
              unit: "teaspoon",
              meta: ["black", "fine"],
              measures: {
                us: {
                  amount: 0.75,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.75,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 4053,
              aisle: "Oil, Vinegar, Salad Dressing",
              image: "olive-oil.jpg",
              consistency: "liquid",
              name: "olive oil",
              nameClean: "olive oil",
              original:
                "2 tablespoons olive oil for the slaw, plus a little more for frying",
              originalName:
                "olive oil for the slaw, plus a little more for frying",
              amount: 2,
              unit: "tablespoons",
              meta: ["for frying", "for the slaw, plus a little more \r"],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
                metric: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
              },
            },
            {
              id: 11429,
              aisle: "Produce",
              image: "radishes.jpg",
              consistency: "solid",
              name: "radish",
              nameClean: "radish",
              original: "250 g radish, grated, sliced or spiralized",
              originalName: "radish, grated, sliced or spiralized",
              amount: 250,
              unit: "g",
              meta: ["grated", "sliced"],
              measures: {
                us: {
                  amount: 8.818,
                  unitShort: "oz",
                  unitLong: "ounces",
                },
                metric: {
                  amount: 250,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 2045,
              aisle: "Produce;Spices and Seasonings",
              image: "dill.jpg",
              consistency: "solid",
              name: "dill",
              nameClean: "dill",
              original: "1 tablespoon dill, finely chopped",
              originalName: "dill, finely chopped",
              amount: 1,
              unit: "tablespoon",
              meta: ["finely chopped"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
                metric: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
              },
            },
            {
              id: 9152,
              aisle: "Produce",
              image: "lemon-juice.jpg",
              consistency: "liquid",
              name: "lemon juice",
              nameClean: "lemon juice",
              original: "2 tablespoons lemon juice",
              originalName: "lemon juice",
              amount: 2,
              unit: "tablespoons",
              meta: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
                metric: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
              },
            },
            {
              id: 18350,
              aisle: "Bakery/Bread",
              image: "hamburger-bun.jpg",
              consistency: "solid",
              name: "burger buns",
              nameClean: "hamburger bun",
              original: "6 burger buns",
              originalName: "burger buns",
              amount: 6,
              unit: "",
              meta: [],
              measures: {
                us: {
                  amount: 6,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 6,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
          ],
          id: 1095894,
          title: "Salmon Amaranth Burgers with Radish Slaw",
          readyInMinutes: 26,
          servings: 6,
          sourceUrl:
            "https://www.foodista.com/recipe/JN6QMFDT/salmon-amaranth-burgers-with-radish",
          image: "https://spoonacular.com/recipeImages/1095894-312x231.jpg",
          imageType: "jpg",
          nutrition: {
            nutrients: [
              {
                name: "Calories",
                amount: 307.33,
                unit: "kcal",
                percentOfDailyNeeds: 15.37,
              },
              {
                name: "Fat",
                amount: 8.36,
                unit: "g",
                percentOfDailyNeeds: 12.86,
              },
              {
                name: "Saturated Fat",
                amount: 1.31,
                unit: "g",
                percentOfDailyNeeds: 8.19,
              },
              {
                name: "Carbohydrates",
                amount: 33.85,
                unit: "g",
                percentOfDailyNeeds: 11.28,
              },
              {
                name: "Net Carbohydrates",
                amount: 31.17,
                unit: "g",
                percentOfDailyNeeds: 11.33,
              },
              {
                name: "Sugar",
                amount: 4.45,
                unit: "g",
                percentOfDailyNeeds: 4.95,
              },
              {
                name: "Cholesterol",
                amount: 45.83,
                unit: "mg",
                percentOfDailyNeeds: 15.28,
              },
              {
                name: "Sodium",
                amount: 704.24,
                unit: "mg",
                percentOfDailyNeeds: 30.62,
              },
              {
                name: "Protein",
                amount: 23.16,
                unit: "g",
                percentOfDailyNeeds: 46.33,
              },
              {
                name: "Selenium",
                amount: 45.58,
                unit: "µg",
                percentOfDailyNeeds: 65.12,
              },
              {
                name: "Vitamin B12",
                amount: 2.75,
                unit: "µg",
                percentOfDailyNeeds: 45.79,
              },
              {
                name: "Vitamin B3",
                amount: 8.81,
                unit: "mg",
                percentOfDailyNeeds: 44.06,
              },
              {
                name: "Vitamin B6",
                amount: 0.79,
                unit: "mg",
                percentOfDailyNeeds: 39.69,
              },
              {
                name: "Manganese",
                amount: 0.67,
                unit: "mg",
                percentOfDailyNeeds: 33.46,
              },
              {
                name: "Vitamin B1",
                amount: 0.47,
                unit: "mg",
                percentOfDailyNeeds: 31.16,
              },
              {
                name: "Vitamin B2",
                amount: 0.49,
                unit: "mg",
                percentOfDailyNeeds: 28.83,
              },
              {
                name: "Phosphorus",
                amount: 286.23,
                unit: "mg",
                percentOfDailyNeeds: 28.62,
              },
              {
                name: "Folate",
                amount: 87.7,
                unit: "µg",
                percentOfDailyNeeds: 21.93,
              },
              {
                name: "Iron",
                amount: 3.4,
                unit: "mg",
                percentOfDailyNeeds: 18.87,
              },
              {
                name: "Copper",
                amount: 0.36,
                unit: "mg",
                percentOfDailyNeeds: 18.16,
              },
              {
                name: "Potassium",
                amount: 633.22,
                unit: "mg",
                percentOfDailyNeeds: 18.09,
              },
              {
                name: "Magnesium",
                amount: 68.65,
                unit: "mg",
                percentOfDailyNeeds: 17.16,
              },
              {
                name: "Vitamin B5",
                amount: 1.48,
                unit: "mg",
                percentOfDailyNeeds: 14.84,
              },
              {
                name: "Vitamin C",
                amount: 9.51,
                unit: "mg",
                percentOfDailyNeeds: 11.53,
              },
              {
                name: "Calcium",
                amount: 111.33,
                unit: "mg",
                percentOfDailyNeeds: 11.13,
              },
              {
                name: "Fiber",
                amount: 2.68,
                unit: "g",
                percentOfDailyNeeds: 10.71,
              },
              {
                name: "Zinc",
                amount: 1.4,
                unit: "mg",
                percentOfDailyNeeds: 9.35,
              },
              {
                name: "Vitamin K",
                amount: 4.12,
                unit: "µg",
                percentOfDailyNeeds: 3.93,
              },
              {
                name: "Vitamin E",
                amount: 0.31,
                unit: "mg",
                percentOfDailyNeeds: 2.05,
              },
            ],
            properties: [
              {
                name: "Glycemic Index",
                amount: 24,
                unit: "",
              },
              {
                name: "Glycemic Load",
                amount: 13.19,
                unit: "",
              },
            ],
            flavonoids: [
              {
                name: "Cyanidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Petunidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Delphinidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Malvidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Pelargonidin",
                amount: 26.3,
                unit: "mg",
              },
              {
                name: "Peonidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Catechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epigallocatechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epicatechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epicatechin 3-gallate",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epigallocatechin 3-gallate",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Theaflavin",
                amount: 0,
                unit: "",
              },
              {
                name: "Thearubigins",
                amount: 0,
                unit: "",
              },
              {
                name: "Eriodictyol",
                amount: 0.24,
                unit: "mg",
              },
              {
                name: "Hesperetin",
                amount: 0.72,
                unit: "mg",
              },
              {
                name: "Naringenin",
                amount: 0.07,
                unit: "mg",
              },
              {
                name: "Apigenin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Luteolin",
                amount: 0.01,
                unit: "mg",
              },
              {
                name: "Isorhamnetin",
                amount: 0.03,
                unit: "mg",
              },
              {
                name: "Kaempferol",
                amount: 5.62,
                unit: "mg",
              },
              {
                name: "Myricetin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Quercetin",
                amount: 6.96,
                unit: "mg",
              },
              {
                name: "Theaflavin-3,3'-digallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3'-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Gallocatechin",
                amount: 0,
                unit: "mg",
              },
            ],
            ingredients: [
              {
                id: 10115076,
                name: "salmon filet",
                amount: 83.33,
                unit: "g",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 20.83,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.53,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.19,
                    unit: "mg",
                  },
                  {
                    name: "Potassium",
                    amount: 408.33,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 45.83,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.82,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 36.67,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 1.39,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 1.75,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.32,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 33.33,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 2.12,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.21,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 6.55,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 118.33,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 24.17,
                    unit: "mg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.68,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 166.67,
                    unit: "mg",
                  },
                  {
                    name: "Fat",
                    amount: 5.28,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 2.65,
                    unit: "µg",
                  },
                  {
                    name: "Calcium",
                    amount: 10,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 30.42,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0.67,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 16.53,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                ],
              },
              {
                id: 20002,
                name: "amaranth",
                amount: 0.17,
                unit: "cup",
                nutrients: [
                  {
                    name: "Copper",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.35,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 9.02,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.86,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.35,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Potassium",
                    amount: 55.35,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.1,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 41.82,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 26.65,
                    unit: "mg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 7.66,
                    unit: "g",
                  },
                  {
                    name: "Sodium",
                    amount: 2.46,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 60.68,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Fat",
                    amount: 0.65,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 19.27,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 2.26,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0.86,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 1.56,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 6.8,
                    unit: "g",
                  },
                ],
              },
              {
                id: 2055,
                name: "horseradish sauce",
                amount: 0.17,
                unit: "tablespoon",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 1.42,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.08,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.03,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 6.15,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.2,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.62,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 10.5,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0.05,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 1.2,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.68,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.28,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.16,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.78,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 1.4,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.07,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.2,
                    unit: "g",
                  },
                ],
              },
              {
                id: 2054,
                name: "capers",
                amount: 0.5,
                unit: "tablespoons",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 0.92,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.13,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.98,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 1.6,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.17,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 110.76,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 5.52,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 0.92,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 1.32,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.2,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.26,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.4,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 1.6,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.05,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.09,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.07,
                    unit: "g",
                  },
                ],
              },
              {
                id: 18079,
                name: "breadcrumbs",
                amount: 0.33,
                unit: "tablespoons",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 3.57,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.15,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.22,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 6.53,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.21,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 24.4,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.07,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 2.73,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.22,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 13.17,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 1.43,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 2.4,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.49,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 5.5,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0.18,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0.01,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 6.1,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.84,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0.16,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.45,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 2.25,
                    unit: "g",
                  },
                ],
              },
              {
                id: 1012047,
                name: "sea salt",
                amount: 0.13,
                unit: "teaspoon",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 290.69,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fluoride",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 0,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.18,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                ],
              },
              {
                id: 4053,
                name: "olive oil",
                amount: 0.33,
                unit: "tablespoons",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 2.81,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.64,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 3.41,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.49,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 41.25,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.67,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 4.67,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                ],
              },
              {
                id: 11429,
                name: "radish",
                amount: 41.67,
                unit: "g",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 10.42,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.67,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.54,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 97.08,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.78,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 6.17,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 16.25,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 2.92,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fluoride",
                    amount: 2.5,
                    unit: "mg",
                  },
                  {
                    name: "Copper",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.11,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 6.67,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 4.17,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 1.42,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 2.71,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 8.33,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 10.42,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.25,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0.14,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.28,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.75,
                    unit: "g",
                  },
                ],
              },
              {
                id: 2045,
                name: "dill",
                amount: 0.17,
                unit: "tablespoon",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 0.1,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Potassium",
                    amount: 0.49,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 5.15,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 0.03,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.14,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                ],
              },
              {
                id: 9152,
                name: "lemon juice",
                amount: 0.33,
                unit: "tablespoons",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 1,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 5.15,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.13,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 1.93,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0.3,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 1.1,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.3,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.35,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.26,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.4,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.3,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.01,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.33,
                    unit: "g",
                  },
                ],
              },
              {
                id: 18350,
                name: "burger buns",
                amount: 1,
                unit: "",
                nutrients: [
                  {
                    name: "Folate",
                    amount: 40.42,
                    unit: "µg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.77,
                    unit: "g",
                  },
                  {
                    name: "Zinc",
                    amount: 0.31,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.23,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 2.06,
                    unit: "µg",
                  },
                  {
                    name: "Potassium",
                    amount: 52.46,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 3.13,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.36,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.56,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 212.42,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.32,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.13,
                    unit: "mg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0.43,
                    unit: "IU",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.77,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 22.79,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.24,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 1.8,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 119.97,
                    unit: "kcal",
                  },
                  {
                    name: "Magnesium",
                    amount: 9.89,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 21.54,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 6.28,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 43.43,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Fat",
                    amount: 1.68,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0.09,
                    unit: "µg",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 61.92,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 11.7,
                    unit: "µg",
                  },
                  {
                    name: "Iron",
                    amount: 1.47,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 4.2,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 20.77,
                    unit: "g",
                  },
                ],
              },
            ],
            caloricBreakdown: {
              percentProtein: 30.55,
              percentFat: 24.81,
              percentCarbs: 44.64,
            },
            weightPerServing: {
              amount: 229,
              unit: "g",
            },
          },
          summary:
            'Salmon Amaranth Burgers with Radish Slaw takes around <b>26 minutes</b> from beginning to end. This recipe makes 6 servings with <b>307 calories</b>, <b>23g of protein</b>, and <b>8g of fat</b> each. For <b>$3.1 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. It is a <b>pretty expensive</b> recipe for fans of American food. 1 person has tried and liked this recipe. It is a good option if you\'re following a <b>dairy free and pescatarian</b> diet. It will be a hit at your <b>The Fourth Of July</b> event. This recipe from Foodista requires salmon filet, cooked amaranth, dill, and breadcrumbs. It works well as a main course. With a spoonacular <b>score of 75%</b>, this dish is pretty good. Similar recipes include <a href="https://spoonacular.com/recipes/salmon-tostadas-with-zucchini-radish-slaw-286485">Salmon Tostadas with Zucchini-Radish Slaw</a>, <a href="https://spoonacular.com/recipes/salmon-burgers-with-tangy-slaw-419530">Salmon Burgers with Tangy Slaw</a>, and <a href="https://spoonacular.com/recipes/salmon-burgers-with-caesar-slaw-385597">Salmon Burgers with Caesar Slaw</a>.',
          cuisines: ["American"],
          dishTypes: ["lunch", "main course", "main dish", "dinner"],
          diets: ["dairy free", "pescatarian"],
          occasions: ["father's day", "4th of july", "summer"],
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: "If you are using frozen salmon filets leave them in a strainer to get rid of excess water and squeeze any remaining water out.Chop up the fish roughly and pulse in a blender to obtain a smooth mixture.  Season, add the amaranth, horseradish, breadcrumbs and stir well.  Fold in the capers.  Form thick (about 2 cm) burgers and coat in the remaining breadcrumbs.",
                  ingredients: [
                    {
                      id: 10115076,
                      name: "salmon fillets",
                      localizedName: "salmon fillets",
                      image: "salmon.png",
                    },
                    {
                      id: 18079,
                      name: "breadcrumbs",
                      localizedName: "breadcrumbs",
                      image: "breadcrumbs.jpg",
                    },
                    {
                      id: 1002055,
                      name: "horseradish",
                      localizedName: "horseradish",
                      image: "horseradish.jpg",
                    },
                    {
                      id: 20001,
                      name: "amaranth",
                      localizedName: "amaranth",
                      image: "amaranth.jpg",
                    },
                    {
                      id: 2054,
                      name: "capers",
                      localizedName: "capers",
                      image: "capers.jpg",
                    },
                    {
                      id: 14412,
                      name: "water",
                      localizedName: "water",
                      image: "water.png",
                    },
                    {
                      id: 10115261,
                      name: "fish",
                      localizedName: "fish",
                      image: "fish-fillet.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 405600,
                      name: "sieve",
                      localizedName: "sieve",
                      image: "strainer.png",
                    },
                    {
                      id: 404726,
                      name: "blender",
                      localizedName: "blender",
                      image: "blender.png",
                    },
                  ],
                },
                {
                  number: 2,
                  step: "Heat up about 2 tablespoons of oil and fry the burgers for 3 minutes on each side on a low/medium heat.To make the radish slaw, grate, spiralize or finely slice the radishes, add the dill, lemon juice, oil and seasoning, and stir well to combine.",
                  ingredients: [
                    {
                      id: 9152,
                      name: "lemon juice",
                      localizedName: "lemon juice",
                      image: "lemon-juice.jpg",
                    },
                    {
                      id: 1042027,
                      name: "seasoning",
                      localizedName: "seasoning",
                      image: "seasoning.png",
                    },
                    {
                      id: 11429,
                      name: "radish",
                      localizedName: "radish",
                      image: "radishes.jpg",
                    },
                    {
                      id: 2045,
                      name: "dill",
                      localizedName: "dill",
                      image: "dill.jpg",
                    },
                    {
                      id: 4582,
                      name: "cooking oil",
                      localizedName: "cooking oil",
                      image: "vegetable-oil.jpg",
                    },
                  ],
                  equipment: [],
                  length: {
                    number: 3,
                    unit: "minutes",
                  },
                },
                {
                  number: 3,
                  step: "Serve the burgers with the radish slaw in your favorite burger buns.",
                  ingredients: [
                    {
                      id: 18350,
                      name: "hamburger bun",
                      localizedName: "hamburger bun",
                      image: "hamburger-bun.jpg",
                    },
                    {
                      id: 11429,
                      name: "radish",
                      localizedName: "radish",
                      image: "radishes.jpg",
                    },
                  ],
                  equipment: [],
                },
              ],
            },
          ],
          spoonacularSourceUrl:
            "https://spoonacular.com/salmon-amaranth-burgers-with-radish-slaw-1095894",
          usedIngredientCount: 0,
          missedIngredientCount: 9,
          missedIngredients: [
            {
              id: 10115076,
              amount: 500,
              unit: "g",
              unitLong: "grams",
              unitShort: "g",
              aisle: "Seafood",
              name: "salmon filet",
              original:
                "500 g salmon filet, fresh or frozen, skinless and boneless",
              originalName:
                "salmon filet, fresh or frozen, skinless and boneless",
              meta: ["fresh", "boneless", "skinless"],
              extendedName: "skinless boneless fresh salmon filet",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/salmon.png",
            },
            {
              id: 20002,
              amount: 1,
              unit: "cup",
              unitLong: "cup",
              unitShort: "cup",
              aisle: "Pasta and Rice;Health Foods",
              name: "amaranth",
              original: "1 cup cooked amaranth (rinsed and strained well)",
              originalName: "cooked amaranth (rinsed and strained well)",
              meta: ["rinsed", "cooked", "well", "( and strained )"],
              extendedName: "cooked amaranth",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/amaranth.jpg",
            },
            {
              id: 2055,
              amount: 1,
              unit: "tablespoon",
              unitLong: "tablespoon",
              unitShort: "Tbsp",
              aisle: "Condiments",
              name: "horseradish sauce",
              original: "1 heaped tablespoon horseradish sauce",
              originalName: "horseradish sauce",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/horseradish-sauce.jpg",
            },
            {
              id: 2054,
              amount: 3,
              unit: "tablespoons",
              unitLong: "tablespoons",
              unitShort: "Tbsp",
              aisle: "Canned and Jarred",
              name: "capers",
              original: "3 tablespoons capers",
              originalName: "capers",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/capers.jpg",
            },
            {
              id: 18079,
              amount: 2,
              unit: "tablespoons",
              unitLong: "tablespoons",
              unitShort: "Tbsp",
              aisle: "Pasta and Rice",
              name: "breadcrumbs",
              original:
                "2 tablespoons breadcrumbs for coating and 2 for adding to the burger mixture",
              originalName:
                "breadcrumbs for coating and 2 for adding to the burger mixture",
              meta: ["for coating and 2 for adding to the burger mixture\r"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg",
            },
            {
              id: 11429,
              amount: 250,
              unit: "g",
              unitLong: "grams",
              unitShort: "g",
              aisle: "Produce",
              name: "radish",
              original: "250 g radish, grated, sliced or spiralized",
              originalName: "radish, grated, sliced or spiralized",
              meta: ["grated", "sliced"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/radishes.jpg",
            },
            {
              id: 2045,
              amount: 1,
              unit: "tablespoon",
              unitLong: "tablespoon",
              unitShort: "Tbsp",
              aisle: "Produce;Spices and Seasonings",
              name: "dill",
              original: "1 tablespoon dill, finely chopped",
              originalName: "dill, finely chopped",
              meta: ["finely chopped"],
              image: "https://spoonacular.com/cdn/ingredients_100x100/dill.jpg",
            },
            {
              id: 9152,
              amount: 2,
              unit: "tablespoons",
              unitLong: "tablespoons",
              unitShort: "Tbsp",
              aisle: "Produce",
              name: "lemon juice",
              original: "2 tablespoons lemon juice",
              originalName: "lemon juice",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg",
            },
            {
              id: 18350,
              amount: 6,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Bakery/Bread",
              name: "burger buns",
              original: "6 burger buns",
              originalName: "burger buns",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/hamburger-bun.jpg",
            },
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: [],
        },
      ],
      trending: [
        {
          vegetarian: false,
          vegan: false,
          glutenFree: true,
          dairyFree: true,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 4,
          gaps: "no",
          lowFodmap: false,
          preparationMinutes: 5,
          cookingMinutes: 10,
          aggregateLikes: 1,
          spoonacularScore: 65,
          healthScore: 20,
          creditsText: "Jen West",
          sourceName: "Pink When",
          pricePerServing: 166.35,
          extendedIngredients: [
            {
              id: 15270,
              aisle: "Seafood",
              image: "shrimp.png",
              consistency: "solid",
              name: "shrimp",
              nameClean: "shrimp",
              original: "14 shrimp peeled, cooked",
              originalName: "shrimp peeled, cooked",
              amount: 14,
              unit: "",
              meta: ["cooked", "peeled"],
              measures: {
                us: {
                  amount: 14,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 14,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 11477,
              aisle: "Produce",
              image: "zucchini.jpg",
              consistency: "solid",
              name: "zucchini",
              nameClean: "zucchini",
              original: "2 zucchini",
              originalName: "zucchini",
              amount: 2,
              unit: "",
              meta: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 2,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 1022020,
              aisle: "Spices and Seasonings",
              image: "garlic-powder.png",
              consistency: "solid",
              name: "garlic powder",
              nameClean: "garlic powder",
              original: "1 tsp garlic powder",
              originalName: "garlic powder",
              amount: 1,
              unit: "tsp",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
                metric: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
              },
            },
            {
              id: 11297,
              aisle: "Produce;Spices and Seasonings",
              image: "parsley.jpg",
              consistency: "solid",
              name: "parsley",
              nameClean: "parsley",
              original: "1 tsp parsley",
              originalName: "parsley",
              amount: 1,
              unit: "tsp",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
                metric: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
              },
            },
            {
              id: 1032009,
              aisle: "Spices and Seasonings",
              image: "red-pepper-flakes.jpg",
              consistency: "solid",
              name: "red pepper flakes",
              nameClean: "red pepper flakes",
              original: "1/2 tsp red pepper flakes",
              originalName: "red pepper flakes",
              amount: 0.5,
              unit: "tsp",
              meta: ["red"],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 9156,
              aisle: "Produce",
              image: "zest-lemon.jpg",
              consistency: "solid",
              name: "lemon zest",
              nameClean: "lemon peel",
              original: "1/4 tsp lemon zest",
              originalName: "lemon zest",
              amount: 0.25,
              unit: "tsp",
              meta: [],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.25,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 4053,
              aisle: "Oil, Vinegar, Salad Dressing",
              image: "olive-oil.jpg",
              consistency: "liquid",
              name: "olive oil",
              nameClean: "olive oil",
              original: "2 tbsp olive oil",
              originalName: "olive oil",
              amount: 2,
              unit: "tbsp",
              meta: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
                metric: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
              },
            },
          ],
          id: 1182871,
          title: "Shrimp Scampi Zoodles",
          readyInMinutes: 15,
          servings: 2,
          sourceUrl: "https://www.pinkwhen.com/shrimp-scampi-zoodles-recipe/",
          image: "https://spoonacular.com/recipeImages/1182871-312x231.jpg",
          imageType: "jpg",
          nutrition: {
            nutrients: [
              {
                name: "Calories",
                amount: 169.71,
                unit: "kcal",
                percentOfDailyNeeds: 8.49,
              },
              {
                name: "Fat",
                amount: 14.75,
                unit: "g",
                percentOfDailyNeeds: 22.69,
              },
              {
                name: "Saturated Fat",
                amount: 2.12,
                unit: "g",
                percentOfDailyNeeds: 13.25,
              },
              {
                name: "Carbohydrates",
                amount: 7.51,
                unit: "g",
                percentOfDailyNeeds: 2.5,
              },
              {
                name: "Net Carbohydrates",
                amount: 5.21,
                unit: "g",
                percentOfDailyNeeds: 1.9,
              },
              {
                name: "Sugar",
                amount: 4.98,
                unit: "g",
                percentOfDailyNeeds: 5.54,
              },
              {
                name: "Cholesterol",
                amount: 11.27,
                unit: "mg",
                percentOfDailyNeeds: 3.76,
              },
              {
                name: "Sodium",
                amount: 33.46,
                unit: "mg",
                percentOfDailyNeeds: 1.45,
              },
              {
                name: "Protein",
                amount: 4.11,
                unit: "g",
                percentOfDailyNeeds: 8.22,
              },
              {
                name: "Vitamin C",
                amount: 35.5,
                unit: "mg",
                percentOfDailyNeeds: 43.02,
              },
              {
                name: "Manganese",
                amount: 0.37,
                unit: "mg",
                percentOfDailyNeeds: 18.65,
              },
              {
                name: "Vitamin B6",
                amount: 0.36,
                unit: "mg",
                percentOfDailyNeeds: 17.8,
              },
              {
                name: "Vitamin K",
                amount: 18.21,
                unit: "µg",
                percentOfDailyNeeds: 17.34,
              },
              {
                name: "Vitamin E",
                amount: 2.45,
                unit: "mg",
                percentOfDailyNeeds: 16.36,
              },
              {
                name: "Potassium",
                amount: 559.1,
                unit: "mg",
                percentOfDailyNeeds: 15.97,
              },
              {
                name: "Folate",
                amount: 48.02,
                unit: "µg",
                percentOfDailyNeeds: 12,
              },
              {
                name: "Vitamin B2",
                amount: 0.19,
                unit: "mg",
                percentOfDailyNeeds: 11.26,
              },
              {
                name: "Vitamin A",
                amount: 544.59,
                unit: "IU",
                percentOfDailyNeeds: 10.89,
              },
              {
                name: "Magnesium",
                amount: 39.73,
                unit: "mg",
                percentOfDailyNeeds: 9.93,
              },
              {
                name: "Phosphorus",
                amount: 97.44,
                unit: "mg",
                percentOfDailyNeeds: 9.74,
              },
              {
                name: "Fiber",
                amount: 2.3,
                unit: "g",
                percentOfDailyNeeds: 9.21,
              },
              {
                name: "Copper",
                amount: 0.14,
                unit: "mg",
                percentOfDailyNeeds: 7.24,
              },
              {
                name: "Vitamin B1",
                amount: 0.1,
                unit: "mg",
                percentOfDailyNeeds: 6.43,
              },
              {
                name: "Iron",
                amount: 1.02,
                unit: "mg",
                percentOfDailyNeeds: 5.66,
              },
              {
                name: "Zinc",
                amount: 0.79,
                unit: "mg",
                percentOfDailyNeeds: 5.27,
              },
              {
                name: "Vitamin B3",
                amount: 0.96,
                unit: "mg",
                percentOfDailyNeeds: 4.78,
              },
              {
                name: "Vitamin B5",
                amount: 0.42,
                unit: "mg",
                percentOfDailyNeeds: 4.17,
              },
              {
                name: "Calcium",
                amount: 39.26,
                unit: "mg",
                percentOfDailyNeeds: 3.93,
              },
              {
                name: "Selenium",
                amount: 0.87,
                unit: "µg",
                percentOfDailyNeeds: 1.24,
              },
            ],
            properties: [
              {
                name: "Glycemic Index",
                amount: 26,
                unit: "",
              },
              {
                name: "Glycemic Load",
                amount: 0.67,
                unit: "",
              },
            ],
            flavonoids: [
              {
                name: "Cyanidin",
                amount: 0,
                unit: "",
              },
              {
                name: "Petunidin",
                amount: 0,
                unit: "",
              },
              {
                name: "Delphinidin",
                amount: 0,
                unit: "",
              },
              {
                name: "Malvidin",
                amount: 0,
                unit: "",
              },
              {
                name: "Pelargonidin",
                amount: 0,
                unit: "",
              },
              {
                name: "Peonidin",
                amount: 0,
                unit: "",
              },
              {
                name: "Catechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epigallocatechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epicatechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epicatechin 3-gallate",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epigallocatechin 3-gallate",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Theaflavin",
                amount: 0,
                unit: "",
              },
              {
                name: "Thearubigins",
                amount: 0,
                unit: "",
              },
              {
                name: "Eriodictyol",
                amount: 0,
                unit: "",
              },
              {
                name: "Hesperetin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Naringenin",
                amount: 0,
                unit: "",
              },
              {
                name: "Apigenin",
                amount: 0.12,
                unit: "mg",
              },
              {
                name: "Luteolin",
                amount: 0.02,
                unit: "mg",
              },
              {
                name: "Isorhamnetin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Kaempferol",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Myricetin",
                amount: 0.01,
                unit: "mg",
              },
              {
                name: "Quercetin",
                amount: 1.29,
                unit: "mg",
              },
              {
                name: "Theaflavin-3,3'-digallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3'-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Gallocatechin",
                amount: 0,
                unit: "mg",
              },
            ],
            ingredients: [
              {
                id: 15270,
                name: "shrimp",
                amount: 7,
                unit: "",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Protein",
                    amount: 1.41,
                    unit: "g",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Potassium",
                    amount: 18.48,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 5.95,
                    unit: "kcal",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Cholesterol",
                    amount: 11.27,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 14.98,
                    unit: "mg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Magnesium",
                    amount: 2.45,
                    unit: "mg",
                  },
                  {
                    name: "Sodium",
                    amount: 8.33,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 4.48,
                    unit: "mg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.09,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 11477,
                name: "zucchini",
                amount: 1,
                unit: "",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.63,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 6.1,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0.35,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 2.37,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 511.56,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.1,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 33.32,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folate",
                    amount: 47.04,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 4.14,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 15.68,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 18.62,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 8.43,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.16,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.24,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.88,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.18,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.73,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.32,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.18,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 4.9,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 35.08,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.4,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 74.48,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 392,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 35.28,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 1.96,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 31.36,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.39,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.63,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 1022020,
                name: "garlic powder",
                amount: 0.5,
                unit: "tsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 1.13,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.26,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 18.49,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 5.13,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folate",
                    amount: 0.73,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.99,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.93,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 1.05,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.01,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 6.42,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 1.19,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.14,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 1.22,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.37,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.05,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 11297,
                name: "parsley",
                amount: 0.5,
                unit: "tsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 0.28,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 0.02,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.08,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.82,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 4.21,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 1032009,
                name: "red pepper flakes",
                amount: 0.25,
                unit: "tsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.07,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.25,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.07,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 9.75,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 1.41,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folate",
                    amount: 0.14,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.07,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 8.2,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.33,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0.11,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.53,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.19,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 1.5,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 148.25,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.75,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.17,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 1.65,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.1,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.02,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 9156,
                name: "lemon zest",
                amount: 0.13,
                unit: "tsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 0.4,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 0.12,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.03,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.32,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0.13,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 0.34,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 4053,
                name: "olive oil",
                amount: 1,
                unit: "tbsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 14,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 0.14,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 123.76,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.28,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 8.43,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 1.93,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 2.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 1.47,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 10.22,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 0.14,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
            ],
            caloricBreakdown: {
              percentProtein: 9.17,
              percentFat: 74.06,
              percentCarbs: 16.77,
            },
            weightPerServing: {
              amount: 219,
              unit: "g",
            },
          },
          summary:
            'Shrimp Scampi Zoodles takes approximately <b>15 minutes</b> from beginning to end. For <b>$1.66 per serving</b>, you get a hor d\'oeuvre that serves 2. Watching your figure? This gluten free, dairy free, paleolithic, and primal recipe has <b>206 calories</b>, <b>11g of protein</b>, and <b>15g of fat</b> per serving. 1 person has made this recipe and would make it again. It is brought to you by Pink When. It is a <b>rather cheap</b> recipe for fans of Mediterranean food. If you have shrimp, zucchini, garlic powder, and a few other ingredients on hand, you can make it. Taking all factors into account, this recipe <b>earns a spoonacular score of 0%</b>, which is very bad (but still fixable). <a href="https://spoonacular.com/recipes/shrimp-scampi-zoodles-729953">Shrimp Scampi Zoodles</a>, <a href="https://spoonacular.com/recipes/shrimp-scampi-zoodles-for-two-971471">Shrimp Scampi Zoodles for Two</a>, and <a href="https://spoonacular.com/recipes/shrimp-2-ways-soy-sauce-grilled-shrimp-with-spinach-salad-and-new-style-scampi-306774">Shrimp 2 Ways: Soy Sauce-Grilled Shrimp with Spinach Salad and New-Style Scampi</a> are very similar to this recipe.',
          cuisines: ["Mediterranean", "Italian", "European"],
          dishTypes: [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre",
          ],
          diets: [
            "gluten free",
            "dairy free",
            "paleolithic",
            "primal",
            "pescatarian",
          ],
          occasions: [],
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: "Grab the spiralizer and the zucchini and use the chipper blade. (This is one of the three blades that comes with the Paderno.) Use a knife to cut off both ends of the zucchini and then place it into the spiralizer. Turn until you have fresh zoodles.",
                  ingredients: [
                    {
                      id: 11477,
                      name: "zucchini",
                      localizedName: "zucchini",
                      image: "zucchini.jpg",
                    },
                    {
                      id: 0,
                      name: "chipper",
                      localizedName: "chipper",
                      image: "shortbread-cookies.jpg",
                    },
                    {
                      id: 10111477,
                      name: "zucchini noodles",
                      localizedName: "zucchini noodles",
                      image: "zoodles.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 404745,
                      name: "knife",
                      localizedName: "knife",
                      image: "chefs-knife.jpg",
                    },
                  ],
                },
                {
                  number: 2,
                  step: "Place a large skillet over medium heat and add 1 tbsp of extra virgin olive oil.",
                  ingredients: [
                    {
                      id: 1034053,
                      name: "extra virgin olive oil",
                      localizedName: "extra virgin olive oil",
                      image: "olive-oil.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                  ],
                },
                {
                  number: 3,
                  step: "Place the fresh zoodles into the skillet and add the garlic and red pepper flakes to flavor things up. Toss zoodles in olive oil and season well. Cover skillet and heat for one minute.",
                  ingredients: [
                    {
                      id: 1032009,
                      name: "red pepper flakes",
                      localizedName: "red pepper flakes",
                      image: "red-pepper-flakes.jpg",
                    },
                    {
                      id: 4053,
                      name: "olive oil",
                      localizedName: "olive oil",
                      image: "olive-oil.jpg",
                    },
                    {
                      id: 10111477,
                      name: "zucchini noodles",
                      localizedName: "zucchini noodles",
                      image: "zoodles.jpg",
                    },
                    {
                      id: 11215,
                      name: "garlic",
                      localizedName: "garlic",
                      image: "garlic.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                  ],
                  length: {
                    number: 1,
                    unit: "minutes",
                  },
                },
                {
                  number: 4,
                  step: "Remove lid, toss zoodles again, and cover for an additional two minutes.",
                  ingredients: [
                    {
                      id: 10111477,
                      name: "zucchini noodles",
                      localizedName: "zucchini noodles",
                      image: "zoodles.jpg",
                    },
                  ],
                  equipment: [],
                  length: {
                    number: 2,
                    unit: "minutes",
                  },
                },
                {
                  number: 5,
                  step: "Remove from heat and keep covered.",
                  ingredients: [],
                  equipment: [],
                },
                {
                  number: 6,
                  step: "Add the shrimp to a small skillet over medium-high heat in a tbsp of olive oil. Season with salt and pepper, lemon zest, and sprinkle with parsley. Once the shrimp are heated through, add the zucchini noodles and serve immediately.",
                  ingredients: [
                    {
                      id: 10111477,
                      name: "zucchini noodles",
                      localizedName: "zucchini noodles",
                      image: "zoodles.jpg",
                    },
                    {
                      id: 1102047,
                      name: "salt and pepper",
                      localizedName: "salt and pepper",
                      image: "salt-and-pepper.jpg",
                    },
                    {
                      id: 9156,
                      name: "lemon zest",
                      localizedName: "lemon zest",
                      image: "zest-lemon.jpg",
                    },
                    {
                      id: 4053,
                      name: "olive oil",
                      localizedName: "olive oil",
                      image: "olive-oil.jpg",
                    },
                    {
                      id: 11297,
                      name: "parsley",
                      localizedName: "parsley",
                      image: "parsley.jpg",
                    },
                    {
                      id: 15270,
                      name: "shrimp",
                      localizedName: "shrimp",
                      image: "shrimp.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                  ],
                },
              ],
            },
          ],
          spoonacularSourceUrl:
            "https://spoonacular.com/shrimp-scampi-zoodles-1182871",
          usedIngredientCount: 0,
          missedIngredientCount: 6,
          missedIngredients: [
            {
              id: 15270,
              amount: 14,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Seafood",
              name: "shrimp",
              original: "14 shrimp peeled, cooked",
              originalName: "shrimp peeled, cooked",
              meta: ["cooked", "peeled"],
              extendedName: "cooked shrimp",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/shrimp.png",
            },
            {
              id: 11477,
              amount: 2,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "zucchini",
              original: "2 zucchini",
              originalName: "zucchini",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/zucchini.jpg",
            },
            {
              id: 1022020,
              amount: 1,
              unit: "tsp",
              unitLong: "teaspoon",
              unitShort: "tsp",
              aisle: "Spices and Seasonings",
              name: "garlic powder",
              original: "1 tsp garlic powder",
              originalName: "garlic powder",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/garlic-powder.png",
            },
            {
              id: 11297,
              amount: 1,
              unit: "tsp",
              unitLong: "teaspoon",
              unitShort: "tsp",
              aisle: "Produce;Spices and Seasonings",
              name: "parsley",
              original: "1 tsp parsley",
              originalName: "parsley",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg",
            },
            {
              id: 1032009,
              amount: 0.5,
              unit: "tsp",
              unitLong: "teaspoons",
              unitShort: "tsp",
              aisle: "Spices and Seasonings",
              name: "red pepper flakes",
              original: "1/2 tsp red pepper flakes",
              originalName: "red pepper flakes",
              meta: ["red"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/red-pepper-flakes.jpg",
            },
            {
              id: 9156,
              amount: 0.25,
              unit: "tsp",
              unitLong: "teaspoons",
              unitShort: "tsp",
              aisle: "Produce",
              name: "lemon zest",
              original: "1/4 tsp lemon zest",
              originalName: "lemon zest",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/zest-lemon.jpg",
            },
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: [],
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 6,
          gaps: "no",
          lowFodmap: false,
          preparationMinutes: 10,
          cookingMinutes: 5,
          aggregateLikes: 0,
          spoonacularScore: 37,
          healthScore: 6,
          creditsText: "Jen West",
          sourceName: "Pink When",
          pricePerServing: 64.09,
          extendedIngredients: [
            {
              id: 16015,
              aisle: "Pasta and Rice;Canned and Jarred",
              image: "black-beans.jpg",
              consistency: "solid",
              name: "black beans from the instant pot",
              nameClean: "black beans",
              original: "Black beans from the instant pot",
              originalName: "Black beans from the instant pot",
              amount: 1,
              unit: "serving",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "serving",
                  unitLong: "serving",
                },
                metric: {
                  amount: 1,
                  unitShort: "serving",
                  unitLong: "serving",
                },
              },
            },
            {
              id: 11979,
              aisle: "Canned and Jarred;Produce;Ethnic Foods",
              image: "jalapeno-pepper.png",
              consistency: "solid",
              name: "jalapeño",
              nameClean: "jalapeno pepper",
              original: "1 chopped jalapeño",
              originalName: "chopped jalapeño",
              amount: 1,
              unit: "",
              meta: ["chopped"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 11529,
              aisle: "Produce",
              image: "tomato.png",
              consistency: "solid",
              name: "tomato",
              nameClean: "tomato",
              original: "1 tomato chopped",
              originalName: "tomato chopped",
              amount: 1,
              unit: "",
              meta: ["chopped"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 11282,
              aisle: "Produce",
              image: "brown-onion.png",
              consistency: "solid",
              name: "onion",
              nameClean: "onion",
              original: "1/3 cup onion",
              originalName: "onion",
              amount: 0.3333333333333333,
              unit: "cup",
              meta: [],
              measures: {
                us: {
                  amount: 0.333,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 78.863,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 11215,
              aisle: "Produce",
              image: "garlic.png",
              consistency: "solid",
              name: "garlic",
              nameClean: "garlic",
              original: "2 cloves garlic",
              originalName: "garlic",
              amount: 2,
              unit: "cloves",
              meta: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "cloves",
                  unitLong: "cloves",
                },
                metric: {
                  amount: 2,
                  unitShort: "cloves",
                  unitLong: "cloves",
                },
              },
            },
            {
              id: 11165,
              aisle: "Produce;Spices and Seasonings",
              image: "cilantro.png",
              consistency: "solid",
              name: "cilantro",
              nameClean: "cilantro",
              original: "1 tbsp cilantro chopped",
              originalName: "cilantro chopped",
              amount: 1,
              unit: "tbsp",
              meta: ["chopped"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
                metric: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
              },
            },
            {
              id: 1002014,
              aisle: "Spices and Seasonings",
              image: "ground-cumin.jpg",
              consistency: "solid",
              name: "cumin",
              nameClean: "cumin",
              original: "1/2 tsp cumin",
              originalName: "cumin",
              amount: 0.5,
              unit: "tsp",
              meta: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 2047,
              aisle: "Spices and Seasonings",
              image: "salt.jpg",
              consistency: "solid",
              name: "salt",
              nameClean: "table salt",
              original: "1/2 tsp salt",
              originalName: "salt",
              amount: 0.5,
              unit: "tsp",
              meta: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 1002030,
              aisle: "Spices and Seasonings",
              image: "pepper.jpg",
              consistency: "solid",
              name: "pepper",
              nameClean: "black pepper",
              original: "1/2 tsp pepper",
              originalName: "pepper",
              amount: 0.5,
              unit: "tsp",
              meta: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 1009,
              aisle: "Cheese",
              image: "cheddar-cheese.png",
              consistency: "solid",
              name: "cheddar cheese",
              nameClean: "cheddar cheese",
              original: "1 cup cheddar cheese",
              originalName: "cheddar cheese",
              amount: 1,
              unit: "cup",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "cup",
                  unitLong: "cup",
                },
                metric: {
                  amount: 236.588,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 9159,
              aisle: "Produce",
              image: "lime.jpg",
              consistency: "solid",
              name: "lime",
              nameClean: "lime",
              original: "1/2 lime",
              originalName: "lime",
              amount: 0.5,
              unit: "",
              meta: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 25037,
              aisle: "Savory Snacks",
              image: "pita-chips.jpg",
              consistency: "solid",
              name: "chips",
              nameClean: "pita chips",
              original: "Chips",
              originalName: "Chips",
              amount: 1,
              unit: "serving",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "serving",
                  unitLong: "serving",
                },
                metric: {
                  amount: 1,
                  unitShort: "serving",
                  unitLong: "serving",
                },
              },
            },
          ],
          id: 1454187,
          title: "Instant Pot Black Bean Nachos",
          readyInMinutes: 15,
          servings: 4,
          sourceUrl: "https://www.pinkwhen.com/instant-pot-black-bean-nachos/",
          image: "https://spoonacular.com/recipeImages/1454187-312x231.jpg",
          imageType: "jpg",
          nutrition: {
            nutrients: [
              {
                name: "Calories",
                amount: 193.85,
                unit: "kcal",
                percentOfDailyNeeds: 9.69,
              },
              {
                name: "Fat",
                amount: 10.96,
                unit: "g",
                percentOfDailyNeeds: 16.86,
              },
              {
                name: "Saturated Fat",
                amount: 5.58,
                unit: "g",
                percentOfDailyNeeds: 34.85,
              },
              {
                name: "Carbohydrates",
                amount: 14.89,
                unit: "g",
                percentOfDailyNeeds: 4.96,
              },
              {
                name: "Net Carbohydrates",
                amount: 11.7,
                unit: "g",
                percentOfDailyNeeds: 4.25,
              },
              {
                name: "Sugar",
                amount: 2.11,
                unit: "g",
                percentOfDailyNeeds: 2.34,
              },
              {
                name: "Cholesterol",
                amount: 28.25,
                unit: "mg",
                percentOfDailyNeeds: 9.42,
              },
              {
                name: "Sodium",
                amount: 538.55,
                unit: "mg",
                percentOfDailyNeeds: 23.42,
              },
              {
                name: "Protein",
                amount: 9.99,
                unit: "g",
                percentOfDailyNeeds: 19.98,
              },
              {
                name: "Calcium",
                amount: 222.44,
                unit: "mg",
                percentOfDailyNeeds: 22.24,
              },
              {
                name: "Phosphorus",
                amount: 185.81,
                unit: "mg",
                percentOfDailyNeeds: 18.58,
              },
              {
                name: "Selenium",
                amount: 10.92,
                unit: "µg",
                percentOfDailyNeeds: 15.61,
              },
              {
                name: "Vitamin C",
                amount: 12.3,
                unit: "mg",
                percentOfDailyNeeds: 14.91,
              },
              {
                name: "Folate",
                amount: 56.35,
                unit: "µg",
                percentOfDailyNeeds: 14.09,
              },
              {
                name: "Manganese",
                amount: 0.27,
                unit: "mg",
                percentOfDailyNeeds: 13.35,
              },
              {
                name: "Fiber",
                amount: 3.19,
                unit: "g",
                percentOfDailyNeeds: 12.75,
              },
              {
                name: "Vitamin A",
                amount: 594.11,
                unit: "IU",
                percentOfDailyNeeds: 11.88,
              },
              {
                name: "Vitamin B2",
                amount: 0.18,
                unit: "mg",
                percentOfDailyNeeds: 10.32,
              },
              {
                name: "Zinc",
                amount: 1.47,
                unit: "mg",
                percentOfDailyNeeds: 9.78,
              },
              {
                name: "Vitamin B1",
                amount: 0.13,
                unit: "mg",
                percentOfDailyNeeds: 8.41,
              },
              {
                name: "Magnesium",
                amount: 32.76,
                unit: "mg",
                percentOfDailyNeeds: 8.19,
              },
              {
                name: "Vitamin E",
                amount: 1.02,
                unit: "mg",
                percentOfDailyNeeds: 6.83,
              },
              {
                name: "Iron",
                amount: 1.21,
                unit: "mg",
                percentOfDailyNeeds: 6.71,
              },
              {
                name: "Potassium",
                amount: 231.06,
                unit: "mg",
                percentOfDailyNeeds: 6.6,
              },
              {
                name: "Vitamin B6",
                amount: 0.12,
                unit: "mg",
                percentOfDailyNeeds: 6.07,
              },
              {
                name: "Copper",
                amount: 0.11,
                unit: "mg",
                percentOfDailyNeeds: 5.25,
              },
              {
                name: "Vitamin B12",
                amount: 0.3,
                unit: "µg",
                percentOfDailyNeeds: 4.99,
              },
              {
                name: "Vitamin B3",
                amount: 0.9,
                unit: "mg",
                percentOfDailyNeeds: 4.51,
              },
              {
                name: "Vitamin K",
                amount: 4.7,
                unit: "µg",
                percentOfDailyNeeds: 4.48,
              },
              {
                name: "Vitamin B5",
                amount: 0.29,
                unit: "mg",
                percentOfDailyNeeds: 2.9,
              },
              {
                name: "Vitamin D",
                amount: 0.17,
                unit: "µg",
                percentOfDailyNeeds: 1.13,
              },
            ],
            properties: [
              {
                name: "Glycemic Index",
                amount: 71.25,
                unit: "",
              },
              {
                name: "Glycemic Load",
                amount: 2.17,
                unit: "",
              },
            ],
            flavonoids: [
              {
                name: "Cyanidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Petunidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Delphinidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Malvidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Pelargonidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Peonidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Catechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epigallocatechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epicatechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epicatechin 3-gallate",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epigallocatechin 3-gallate",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Theaflavin",
                amount: 0,
                unit: "",
              },
              {
                name: "Thearubigins",
                amount: 0,
                unit: "",
              },
              {
                name: "Eriodictyol",
                amount: 0,
                unit: "",
              },
              {
                name: "Hesperetin",
                amount: 3.6,
                unit: "mg",
              },
              {
                name: "Naringenin",
                amount: 0.49,
                unit: "mg",
              },
              {
                name: "Apigenin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Luteolin",
                amount: 0.05,
                unit: "mg",
              },
              {
                name: "Isorhamnetin",
                amount: 0.67,
                unit: "mg",
              },
              {
                name: "Kaempferol",
                amount: 0.12,
                unit: "mg",
              },
              {
                name: "Myricetin",
                amount: 0.07,
                unit: "mg",
              },
              {
                name: "Quercetin",
                amount: 3.18,
                unit: "mg",
              },
              {
                name: "Theaflavin-3,3'-digallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3'-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Gallocatechin",
                amount: 0,
                unit: "mg",
              },
            ],
            ingredients: [
              {
                id: 16015,
                name: "black beans from the instant pot",
                amount: 0.25,
                unit: "serving",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.12,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 5.1,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0.1,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 1.9,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 76.33,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 28.38,
                    unit: "kcal",
                  },
                  {
                    name: "Folate",
                    amount: 32.03,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 3.23,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.22,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.11,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.45,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 30.1,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 1.29,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 15.05,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 1.87,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 5.81,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.26,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.24,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 11979,
                name: "jalapeño",
                amount: 0.25,
                unit: "",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.23,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 8.68,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 1.01,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folate",
                    amount: 0.95,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.13,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.11,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.26,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.65,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.13,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.14,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 4.15,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.91,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 37.73,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.53,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.1,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 0.42,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.01,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 11529,
                name: "tomato",
                amount: 0.25,
                unit: "",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 1.2,
                    unit: "g",
                  },
                  {
                    name: "Fluoride",
                    amount: 0.71,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.27,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 72.88,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 5.54,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 4.61,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.83,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 1.54,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 2.06,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 790.28,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 2.43,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.17,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.18,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.81,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 4.21,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 7.38,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 256.15,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 3.38,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.37,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 3.08,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.05,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 11282,
                name: "onion",
                amount: 0.08,
                unit: "cup",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 1.25,
                    unit: "g",
                  },
                  {
                    name: "Fluoride",
                    amount: 0.15,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.15,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 19.47,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 5.33,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 2.53,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 1.02,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.53,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.81,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.05,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.57,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.99,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 3.87,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0.27,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 1.33,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.23,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 3.07,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.07,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.02,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 11215,
                name: "garlic",
                amount: 0.5,
                unit: "cloves",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.5,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.1,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 6.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 2.24,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.05,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.47,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.26,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.35,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.03,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.47,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 2.3,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0.14,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.38,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 2.72,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.21,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.02,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 11165,
                name: "cilantro",
                amount: 0.25,
                unit: "tbsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 0.52,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 0.02,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.06,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.31,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 6.75,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 1002014,
                name: "cumin",
                amount: 0.13,
                unit: "tsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.11,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 4.47,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 0.94,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.03,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.08,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.42,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.01,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.17,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 1.25,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 3.18,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.92,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 2.33,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.01,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.01,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 2047,
                name: "salt",
                amount: 0.13,
                unit: "tsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Fluoride",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 0,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 290.69,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 0.18,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 1002030,
                name: "pepper",
                amount: 0.13,
                unit: "tsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.16,
                    unit: "g",
                  },
                  {
                    name: "Fluoride",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 3.32,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 0.63,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folate",
                    amount: 0.04,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.1,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0.05,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.41,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.4,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 1.37,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.43,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 1.11,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.01,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 1009,
                name: "cheddar cheese",
                amount: 0.25,
                unit: "cup",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 9.61,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.69,
                    unit: "g",
                  },
                  {
                    name: "Fluoride",
                    amount: 9.86,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 6.58,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 21.75,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0.17,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 115.26,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 5.93,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.69,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 184.76,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 4.66,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.68,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 5.42,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.21,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.33,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 2.1,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 28.25,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0.3,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.09,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 129.39,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 283.07,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 7.63,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 199.73,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 7.99,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 1.04,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 9159,
                name: "lime",
                amount: 0.13,
                unit: "",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.88,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 8.54,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 2.51,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.67,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.64,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.17,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.43,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.05,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.14,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 2.44,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 1.51,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 4.19,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.5,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.23,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 2.76,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.03,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.01,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 25037,
                name: "chips",
                amount: 0.25,
                unit: "serving",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 1.06,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 4.78,
                    unit: "g",
                  },
                  {
                    name: "Fluoride",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.83,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 9.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 31.99,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folate",
                    amount: 9.45,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 4.51,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 7.98,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 59.78,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.64,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.08,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.09,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.49,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.49,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.15,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.32,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.76,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.33,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 8.68,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 2.59,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.27,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 1.19,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 2.32,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.07,
                    unit: "mg",
                  },
                ],
              },
            ],
            caloricBreakdown: {
              percentProtein: 20.16,
              percentFat: 49.79,
              percentCarbs: 30.05,
            },
            weightPerServing: {
              amount: 116,
              unit: "g",
            },
          },
          summary:
            'Forget going out to eat or ordering takeout every time you crave Mexican food. Try making Instant Pot Black Bean Nachos at home. For <b>64 cents per serving</b>, you get a hor d\'oeuvre that serves 4. One portion of this dish contains roughly <b>10g of protein</b>, <b>11g of fat</b>, and a total of <b>192 calories</b>. If you have onion, garlic, cumin, and a few other ingredients on hand, you can make it. 1 person has made this recipe and would make it again. It is brought to you by Pink When. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. With a spoonacular <b>score of 0%</b>, this dish is improvable. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/clean-eating-instant-pot-black-bean-vegetable-soup-1054981">Clean Eating Instant Pot Black Bean Vegetable Soup</a>, <a href="https://spoonacular.com/recipes/pressure-cooker-instant-pot-cuban-black-bean-soup-963001">Pressure Cooker/Instant Pot Cuban Black Bean Soup</a>, and <a href="https://spoonacular.com/recipes/black-bean-nachos-1317011">Black Bean Nachos</a>.',
          cuisines: ["Mexican"],
          dishTypes: [
            "fingerfood",
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre",
          ],
          diets: [],
          occasions: [],
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: "Chop veggies and place all ingredients into the bowl with black beans.",
                  ingredients: [
                    {
                      id: 16015,
                      name: "black beans",
                      localizedName: "black beans",
                      image: "black-beans.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 404783,
                      name: "bowl",
                      localizedName: "bowl",
                      image: "bowl.jpg",
                    },
                  ],
                },
                {
                  number: 2,
                  step: "Stir well squeezing the lime over the salsa.",
                  ingredients: [
                    {
                      id: 6164,
                      name: "salsa",
                      localizedName: "salsa",
                      image: "salsa.png",
                    },
                    {
                      id: 9159,
                      name: "lime",
                      localizedName: "lime",
                      image: "lime.jpg",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 3,
                  step: "Place in the fridge and allow to sit for a 1/2 hour.",
                  ingredients: [],
                  equipment: [],
                  length: {
                    number: 120,
                    unit: "minutes",
                  },
                },
                {
                  number: 4,
                  step: "Arrange chips on the baking sheet placing 3/4 of the cheese over chips.",
                  ingredients: [
                    {
                      id: 1041009,
                      name: "cheese",
                      localizedName: "cheese",
                      image: "cheddar-cheese.png",
                    },
                    {
                      id: 11408,
                      name: "french fries",
                      localizedName: "french fries",
                      image: "french-fries-isolated.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 404727,
                      name: "baking sheet",
                      localizedName: "baking sheet",
                      image: "baking-sheet.jpg",
                    },
                  ],
                },
                {
                  number: 5,
                  step: "Place under broiler until chips are golden and cheese is bubbly.",
                  ingredients: [
                    {
                      id: 1041009,
                      name: "cheese",
                      localizedName: "cheese",
                      image: "cheddar-cheese.png",
                    },
                    {
                      id: 11408,
                      name: "french fries",
                      localizedName: "french fries",
                      image: "french-fries-isolated.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 405914,
                      name: "broiler",
                      localizedName: "broiler",
                      image: "oven.jpg",
                    },
                  ],
                },
                {
                  number: 6,
                  step: "Place salsa over chips and garnish with remaking cheese.",
                  ingredients: [
                    {
                      id: 1041009,
                      name: "cheese",
                      localizedName: "cheese",
                      image: "cheddar-cheese.png",
                    },
                    {
                      id: 11408,
                      name: "french fries",
                      localizedName: "french fries",
                      image: "french-fries-isolated.jpg",
                    },
                    {
                      id: 6164,
                      name: "salsa",
                      localizedName: "salsa",
                      image: "salsa.png",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 7,
                  step: "Squeeze lime over nachos prior to serving.",
                  ingredients: [
                    {
                      id: 9159,
                      name: "lime",
                      localizedName: "lime",
                      image: "lime.jpg",
                    },
                  ],
                  equipment: [],
                },
              ],
            },
          ],
          spoonacularSourceUrl:
            "https://spoonacular.com/instant-pot-black-bean-nachos-1454187",
          usedIngredientCount: 0,
          missedIngredientCount: 10,
          missedIngredients: [
            {
              id: 16015,
              amount: 1,
              unit: "serving",
              unitLong: "serving",
              unitShort: "serving",
              aisle: "Pasta and Rice;Canned and Jarred",
              name: "black beans from the instant pot",
              original: "Black beans from the instant pot",
              originalName: "Black beans from the instant pot",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/black-beans.jpg",
            },
            {
              id: 11979,
              amount: 1,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Canned and Jarred;Produce;Ethnic Foods",
              name: "jalapeño",
              original: "1 chopped jalapeño",
              originalName: "chopped jalapeño",
              meta: ["chopped"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/jalapeno-pepper.png",
            },
            {
              id: 11529,
              amount: 1,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "tomato",
              original: "1 tomato chopped",
              originalName: "tomato chopped",
              meta: ["chopped"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/tomato.png",
            },
            {
              id: 11282,
              amount: 0.3333333333333333,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Produce",
              name: "onion",
              original: "1/3 cup onion",
              originalName: "onion",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
            },
            {
              id: 11215,
              amount: 2,
              unit: "cloves",
              unitLong: "cloves",
              unitShort: "cloves",
              aisle: "Produce",
              name: "garlic",
              original: "2 cloves garlic",
              originalName: "garlic",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
            },
            {
              id: 11165,
              amount: 1,
              unit: "tbsp",
              unitLong: "tablespoon",
              unitShort: "Tbsp",
              aisle: "Produce;Spices and Seasonings",
              name: "cilantro",
              original: "1 tbsp cilantro chopped",
              originalName: "cilantro chopped",
              meta: ["chopped"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/cilantro.png",
            },
            {
              id: 1002014,
              amount: 0.5,
              unit: "tsp",
              unitLong: "teaspoons",
              unitShort: "tsp",
              aisle: "Spices and Seasonings",
              name: "cumin",
              original: "1/2 tsp cumin",
              originalName: "cumin",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/ground-cumin.jpg",
            },
            {
              id: 1009,
              amount: 1,
              unit: "cup",
              unitLong: "cup",
              unitShort: "cup",
              aisle: "Cheese",
              name: "cheddar cheese",
              original: "1 cup cheddar cheese",
              originalName: "cheddar cheese",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png",
            },
            {
              id: 9159,
              amount: 0.5,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "lime",
              original: "1/2 lime",
              originalName: "lime",
              meta: [],
              image: "https://spoonacular.com/cdn/ingredients_100x100/lime.jpg",
            },
            {
              id: 25037,
              amount: 1,
              unit: "serving",
              unitLong: "serving",
              unitShort: "serving",
              aisle: "Savory Snacks",
              name: "chips",
              original: "Chips",
              originalName: "Chips",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/pita-chips.jpg",
            },
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: [],
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: true,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 0,
          gaps: "no",
          lowFodmap: false,
          preparationMinutes: 10,
          cookingMinutes: 20,
          aggregateLikes: 0,
          spoonacularScore: 71,
          healthScore: 37,
          creditsText: "maplewoodroad",
          sourceName: "Maplewood Road",
          pricePerServing: 738.14,
          extendedIngredients: [
            {
              id: 23232,
              aisle: "Meat",
              image: "ribeye-raw.jpg",
              consistency: "solid",
              name: "hanger steak",
              nameClean: "steak",
              original: "1 lb hanger steak, thinly sliced against the grain",
              originalName: "hanger steak, thinly sliced against the grain",
              amount: 1,
              unit: "lb",
              meta: ["thinly sliced"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "lb",
                  unitLong: "pound",
                },
                metric: {
                  amount: 453.592,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 1022053,
              aisle: "Ethnic Foods;Oil, Vinegar, Salad Dressing",
              image: "rice-vinegar.png",
              consistency: "liquid",
              name: "rice wine vinegar",
              nameClean: "rice vinegar",
              original: "1/4 c rice wine vinegar",
              originalName: "rice wine vinegar",
              amount: 0.25,
              unit: "c",
              meta: [],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 59.147,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 20027,
              aisle: "Baking",
              image: "white-powder.jpg",
              consistency: "solid",
              name: "cornstarch",
              nameClean: "corn starch",
              original: "1 Tbsp cornstarch",
              originalName: "cornstarch",
              amount: 1,
              unit: "Tbsp",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
                metric: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
              },
            },
            {
              id: 4042,
              aisle: "Oil, Vinegar, Salad Dressing",
              image: "peanut-oil.jpg",
              consistency: "liquid",
              name: "peanut oil",
              nameClean: "peanut oil",
              original:
                "1/4 c peanut oil (or any neutral oil with a high smoking point)",
              originalName:
                "peanut oil (or any neutral oil with a high smoking point)",
              amount: 0.25,
              unit: "c",
              meta: ["or any neutral oil with a high smoking point)"],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 59.147,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 11090,
              aisle: "Produce",
              image: "broccoli.jpg",
              consistency: "solid",
              name: "broccoli",
              nameClean: "broccoli",
              original: "12 oz chopped broccoli",
              originalName: "chopped broccoli",
              amount: 12,
              unit: "oz",
              meta: ["chopped"],
              measures: {
                us: {
                  amount: 12,
                  unitShort: "oz",
                  unitLong: "ounces",
                },
                metric: {
                  amount: 340.194,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 16124,
              aisle: "Ethnic Foods;Condiments",
              image: "soy-sauce.jpg",
              consistency: "liquid",
              name: "soy sauce",
              nameClean: "soy sauce",
              original: "6 Tbsp soy sauce",
              originalName: "soy sauce",
              amount: 6,
              unit: "Tbsp",
              meta: [],
              measures: {
                us: {
                  amount: 6,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
                metric: {
                  amount: 6,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
              },
            },
            {
              id: 6175,
              aisle: "Ethnic Foods",
              image: "dark-sauce.jpg",
              consistency: "solid",
              name: "hoisin sauce",
              nameClean: "hoisin sauce",
              original: "1/4 c hoisin sauce",
              originalName: "hoisin sauce",
              amount: 0.25,
              unit: "c",
              meta: [],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 59.147,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 6972,
              aisle: "Ethnic Foods",
              image: "tomato-sauce-or-pasta-sauce.jpg",
              consistency: "solid",
              name: "sambal oelek",
              nameClean: "chili sauce",
              original: "1 Tbsp Sambal oelek (or your favorite chili sauce)",
              originalName: "Sambal oelek (or your favorite chili sauce)",
              amount: 1,
              unit: "Tbsp",
              meta: ["your favorite", "(or chili sauce)"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
                metric: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
              },
            },
            {
              id: 1001,
              aisle: "Milk, Eggs, Other Dairy",
              image: "butter-sliced.jpg",
              consistency: "solid",
              name: "butter",
              nameClean: "butter",
              original: "2 Tbsp butter",
              originalName: "butter",
              amount: 2,
              unit: "Tbsp",
              meta: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
                metric: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
              },
            },
            {
              id: 10211216,
              aisle: "Produce",
              image: "ginger.png",
              consistency: "solid",
              name: "ginger",
              nameClean: "fresh ginger",
              original: "1 Tbsp finely chopped fresh ginger (optional)",
              originalName: "finely chopped fresh ginger (optional)",
              amount: 1,
              unit: "Tbsp",
              meta: ["fresh", "finely chopped"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
                metric: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
              },
            },
            {
              id: 20444,
              aisle: "Pasta and Rice",
              image: "uncooked-white-rice.png",
              consistency: "solid",
              name: "rice",
              nameClean: "rice",
              original: "2 c rice",
              originalName: "rice",
              amount: 2,
              unit: "c",
              meta: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 473.176,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
          ],
          id: 1697733,
          title: "Chinese Beef and Broccoli",
          author: "maplewoodroad",
          readyInMinutes: 30,
          servings: 2,
          sourceUrl: "https://maplewoodroad.com/chinese-beef-broccoli/",
          image: "https://spoonacular.com/recipeImages/1697733-312x231.jpg",
          imageType: "jpg",
          nutrition: {
            nutrients: [
              {
                name: "Calories",
                amount: 1684.02,
                unit: "kcal",
                percentOfDailyNeeds: 84.2,
              },
              {
                name: "Fat",
                amount: 73.71,
                unit: "g",
                percentOfDailyNeeds: 113.39,
              },
              {
                name: "Saturated Fat",
                amount: 26.87,
                unit: "g",
                percentOfDailyNeeds: 167.91,
              },
              {
                name: "Carbohydrates",
                amount: 183.15,
                unit: "g",
                percentOfDailyNeeds: 61.05,
              },
              {
                name: "Net Carbohydrates",
                amount: 174.64,
                unit: "g",
                percentOfDailyNeeds: 63.51,
              },
              {
                name: "Sugar",
                amount: 14.49,
                unit: "g",
                percentOfDailyNeeds: 16.1,
              },
              {
                name: "Cholesterol",
                amount: 169.91,
                unit: "mg",
                percentOfDailyNeeds: 56.64,
              },
              {
                name: "Sodium",
                amount: 3949.89,
                unit: "mg",
                percentOfDailyNeeds: 171.73,
              },
              {
                name: "Protein",
                amount: 70.81,
                unit: "g",
                percentOfDailyNeeds: 141.63,
              },
              {
                name: "Vitamin C",
                amount: 153.24,
                unit: "mg",
                percentOfDailyNeeds: 185.74,
              },
              {
                name: "Vitamin K",
                amount: 178.83,
                unit: "µg",
                percentOfDailyNeeds: 170.32,
              },
              {
                name: "Manganese",
                amount: 2.75,
                unit: "mg",
                percentOfDailyNeeds: 137.72,
              },
              {
                name: "Selenium",
                amount: 89.1,
                unit: "µg",
                percentOfDailyNeeds: 127.28,
              },
              {
                name: "Zinc",
                amount: 14.74,
                unit: "mg",
                percentOfDailyNeeds: 98.24,
              },
              {
                name: "Vitamin B3",
                amount: 17.84,
                unit: "mg",
                percentOfDailyNeeds: 89.19,
              },
              {
                name: "Vitamin B6",
                amount: 1.65,
                unit: "mg",
                percentOfDailyNeeds: 82.67,
              },
              {
                name: "Phosphorus",
                amount: 745.16,
                unit: "mg",
                percentOfDailyNeeds: 74.52,
              },
              {
                name: "Vitamin B12",
                amount: 3.79,
                unit: "µg",
                percentOfDailyNeeds: 63.15,
              },
              {
                name: "Vitamin B2",
                amount: 1,
                unit: "mg",
                percentOfDailyNeeds: 58.8,
              },
              {
                name: "Iron",
                amount: 8.38,
                unit: "mg",
                percentOfDailyNeeds: 46.53,
              },
              {
                name: "Potassium",
                amount: 1559.9,
                unit: "mg",
                percentOfDailyNeeds: 44.57,
              },
              {
                name: "Vitamin E",
                amount: 6.35,
                unit: "mg",
                percentOfDailyNeeds: 42.32,
              },
              {
                name: "Magnesium",
                amount: 162.58,
                unit: "mg",
                percentOfDailyNeeds: 40.64,
              },
              {
                name: "Copper",
                amount: 0.81,
                unit: "mg",
                percentOfDailyNeeds: 40.29,
              },
              {
                name: "Folate",
                amount: 147.88,
                unit: "µg",
                percentOfDailyNeeds: 36.97,
              },
              {
                name: "Fiber",
                amount: 8.51,
                unit: "g",
                percentOfDailyNeeds: 34.03,
              },
              {
                name: "Vitamin B1",
                amount: 0.49,
                unit: "mg",
                percentOfDailyNeeds: 32.76,
              },
              {
                name: "Vitamin B5",
                amount: 3.1,
                unit: "mg",
                percentOfDailyNeeds: 31,
              },
              {
                name: "Vitamin A",
                amount: 1501.64,
                unit: "IU",
                percentOfDailyNeeds: 30.03,
              },
              {
                name: "Calcium",
                amount: 176.88,
                unit: "mg",
                percentOfDailyNeeds: 17.69,
              },
              {
                name: "Vitamin D",
                amount: 0.23,
                unit: "µg",
                percentOfDailyNeeds: 1.51,
              },
            ],
            properties: [
              {
                name: "Glycemic Index",
                amount: 111.59,
                unit: "",
              },
              {
                name: "Glycemic Load",
                amount: 91.7,
                unit: "",
              },
            ],
            flavonoids: [
              {
                name: "Cyanidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Petunidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Delphinidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Malvidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Pelargonidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Peonidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Catechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epigallocatechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epicatechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epicatechin 3-gallate",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epigallocatechin 3-gallate",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Theaflavin",
                amount: 0,
                unit: "",
              },
              {
                name: "Thearubigins",
                amount: 0,
                unit: "",
              },
              {
                name: "Eriodictyol",
                amount: 0,
                unit: "",
              },
              {
                name: "Hesperetin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Naringenin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Apigenin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Luteolin",
                amount: 1.36,
                unit: "mg",
              },
              {
                name: "Isorhamnetin",
                amount: 0,
                unit: "",
              },
              {
                name: "Kaempferol",
                amount: 13.34,
                unit: "mg",
              },
              {
                name: "Myricetin",
                amount: 0.1,
                unit: "mg",
              },
              {
                name: "Quercetin",
                amount: 5.55,
                unit: "mg",
              },
              {
                name: "Theaflavin-3,3'-digallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3'-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Gallocatechin",
                amount: 0,
                unit: "mg",
              },
            ],
            ingredients: [
              {
                id: 23232,
                name: "hanger steak",
                amount: 0.5,
                unit: "lb",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 32.07,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Protein",
                    amount: 45.63,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 607.81,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0.23,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.18,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 471.74,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 6.8,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 117.93,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 3.4,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 14.27,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 11.1,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 1.57,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 3.9,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.9,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 15.36,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.54,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 138.35,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 3.76,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 326.59,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 34.02,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.2,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 47.63,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 15.88,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 55.34,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 11.63,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 1022053,
                name: "rice wine vinegar",
                amount: 0.13,
                unit: "c",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 0.64,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 5.74,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.64,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 1.27,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.32,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 1.91,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.16,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 20027,
                name: "cornstarch",
                amount: 0.5,
                unit: "Tbsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 3.65,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 15.24,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 3.61,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.36,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.52,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.11,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 4042,
                name: "peanut oil",
                amount: 0.13,
                unit: "c",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 27,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 238.68,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.19,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 4.56,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 4.24,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 8.64,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 12.47,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 11090,
                name: "broccoli",
                amount: 6,
                unit: "oz",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.63,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 11.29,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0.36,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 4.8,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 537.51,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 57.83,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 107.16,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 6.87,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 56.13,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 31.81,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 173.5,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.19,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 1.33,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 1.09,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.19,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 1.24,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.3,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.2,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 2.89,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 151.73,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.97,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 112.26,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 1059.7,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 35.72,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 4.42,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 79.95,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 4.25,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.7,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 16124,
                name: "soy sauce",
                amount: 3,
                unit: "Tbsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 3.01,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0.27,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 5.68,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 114.48,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 32.4,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 9.72,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 2.58,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 3016.44,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 20.74,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 2.13,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 1.29,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.11,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.92,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.2,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 70.2,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 21.6,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.43,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 10.8,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.43,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.23,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 6175,
                name: "hoisin sauce",
                amount: 0.13,
                unit: "c",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 1.17,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 15.16,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 1.14,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 40.91,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 75.63,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 7.91,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 14.2,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 556.88,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 2.75,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.17,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.2,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.1,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.4,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.58,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.35,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.33,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 1.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 9.38,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.14,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 13.06,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 2.06,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 8.25,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.96,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 11,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.62,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.11,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 6972,
                name: "sambal oelek",
                amount: 0.5,
                unit: "Tbsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 1.49,
                    unit: "g",
                  },
                  {
                    name: "Protein",
                    amount: 0.19,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 27.75,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 6.9,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.68,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 1.31,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 100.5,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 1.03,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 960,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.39,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.14,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 1,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 1.2,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 3.9,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 51,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.9,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.18,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 1.5,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.08,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.01,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 1001,
                name: "butter",
                amount: 1,
                unit: "Tbsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 11.52,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Fluoride",
                    amount: 0.4,
                    unit: "mg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.12,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 3.41,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 101.81,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0.47,
                    unit: "g",
                  },
                  {
                    name: "Folate",
                    amount: 0.43,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 91.31,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 2.67,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.99,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 7.3,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.33,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.43,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 2.98,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 30.53,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0.02,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 3.41,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 354.86,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.28,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 3.41,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.14,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.01,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 10211216,
                name: "ginger",
                amount: 0.5,
                unit: "Tbsp",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.62,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 14.53,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 2.8,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.39,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.55,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 0.46,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 1.01,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.18,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 1.19,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 1.51,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.07,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 0.56,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 0.02,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.01,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 20444,
                name: "rice",
                amount: 1,
                unit: "c",
                nutrients: [
                  {
                    name: "Fat",
                    amount: 1.22,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 147.91,
                    unit: "g",
                  },
                  {
                    name: "Manganese",
                    amount: 2.01,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 13.19,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 212.75,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Copper",
                    amount: 0.41,
                    unit: "mg",
                  },
                  {
                    name: "Calories",
                    amount: 675.25,
                    unit: "kcal",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 14.8,
                    unit: "µg",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 145.5,
                    unit: "g",
                  },
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sodium",
                    amount: 9.25,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 10.73,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.19,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.33,
                    unit: "g",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.2,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 2.96,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.33,
                    unit: "g",
                  },
                  {
                    name: "Iron",
                    amount: 1.48,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.3,
                    unit: "mg",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.38,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.22,
                    unit: "g",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 1.88,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 212.75,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.13,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 46.25,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 2.4,
                    unit: "g",
                  },
                  {
                    name: "Calcium",
                    amount: 51.8,
                    unit: "mg",
                  },
                  {
                    name: "Selenium",
                    amount: 27.94,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 2.02,
                    unit: "mg",
                  },
                ],
              },
            ],
            caloricBreakdown: {
              percentProtein: 16.87,
              percentFat: 39.5,
              percentCarbs: 43.63,
            },
            weightPerServing: {
              amount: 758,
              unit: "g",
            },
          },
          summary:
            'Chinese Beef and Broccoli might be just the hor d\'oeuvre you are searching for. This recipe makes 2 servings with <b>120 calories</b>, <b>9g of protein</b>, and <b>2g of fat</b> each. For <b>$7.38 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. It is brought to you by spoonacular user <a href="/profile/maplewoodroad">maplewoodroad</a>. Head to the store and pick up hoisin sauce, sambal oelek, butter, and a few other things to make it today. This recipe is typical of Chinese cuisine. It is a good option if you\'re following a <b>gluten free</b> diet. From preparation to the plate, this recipe takes approximately <b>30 minutes</b>. <a href="https://spoonacular.com/recipes/chinese-beef-with-broccoli-311273">Chinese Beef With Broccoli</a>, <a href="https://spoonacular.com/recipes/chinese-beef-broccoli-602204">Chinese Beef Broccoli</a>, and <a href="https://spoonacular.com/recipes/chinese-broccoli-beef-14828">Chinese Broccoli Beef</a> are very similar to this recipe.',
          cuisines: ["Chinese", "Asian"],
          dishTypes: [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre",
          ],
          diets: ["gluten free"],
          occasions: [],
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: "If you make a big batch, it’s easier to use a wok. A smaller frying pan will work too, but you might have to fry the meat in two batches, so the pan isn’t overcrowded. ",
                  ingredients: [
                    {
                      id: 1065062,
                      name: "meat",
                      localizedName: "meat",
                      image: "whole-chicken.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                    {
                      id: 404666,
                      name: "wok",
                      localizedName: "wok",
                      image: "wok.png",
                    },
                  ],
                },
                {
                  number: 2,
                  step: "Start cooking rice according to package instructions.",
                  ingredients: [
                    {
                      id: 20444,
                      name: "rice",
                      localizedName: "rice",
                      image: "uncooked-white-rice.png",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 3,
                  step: "Thinly slice beef against the grain and mix in a bowl with rice wine vinegar, 2 Tbsp soy sauce, and 1 Tbsp cornstarch. ",
                  ingredients: [
                    {
                      id: 1022053,
                      name: "rice vinegar",
                      localizedName: "rice vinegar",
                      image: "rice-vinegar.png",
                    },
                    {
                      id: 20027,
                      name: "corn starch",
                      localizedName: "corn starch",
                      image: "white-powder.jpg",
                    },
                    {
                      id: 16124,
                      name: "soy sauce",
                      localizedName: "soy sauce",
                      image: "soy-sauce.jpg",
                    },
                    {
                      id: 0,
                      name: "grains",
                      localizedName: "grains",
                      image: "",
                    },
                    {
                      id: 23572,
                      name: "beef",
                      localizedName: "beef",
                      image: "beef-cubes-raw.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 404783,
                      name: "bowl",
                      localizedName: "bowl",
                      image: "bowl.jpg",
                    },
                  ],
                },
                {
                  number: 4,
                  step: "Mix the remaining soy sauce with the hoisin sauce, sambal oelek, and ginger, and set aside.",
                  ingredients: [
                    {
                      id: 6175,
                      name: "hoisin sauce",
                      localizedName: "hoisin sauce",
                      image: "dark-sauce.jpg",
                    },
                    {
                      id: 0,
                      name: "sambal oelek",
                      localizedName: "sambal oelek",
                      image: "chili-paste.png",
                    },
                    {
                      id: 16124,
                      name: "soy sauce",
                      localizedName: "soy sauce",
                      image: "soy-sauce.jpg",
                    },
                    {
                      id: 11216,
                      name: "ginger",
                      localizedName: "ginger",
                      image: "ginger.png",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 5,
                  step: "Bring a pot of water to a boil and blanch broccoli for 2 minutes. ",
                  ingredients: [
                    {
                      id: 11090,
                      name: "broccoli",
                      localizedName: "broccoli",
                      image: "broccoli.jpg",
                    },
                    {
                      id: 14412,
                      name: "water",
                      localizedName: "water",
                      image: "water.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 404752,
                      name: "pot",
                      localizedName: "pot",
                      image: "stock-pot.jpg",
                    },
                  ],
                  length: {
                    number: 2,
                    unit: "minutes",
                  },
                },
                {
                  number: 6,
                  step: "Bring peanut oil to a simmer over high heat and add the beef. Stir fry until browned, about 2 minutes. If using a smaller pan, stir fry the beef in two batches, using half the oil each time.",
                  ingredients: [
                    {
                      id: 4042,
                      name: "peanut oil",
                      localizedName: "peanut oil",
                      image: "peanut-oil.jpg",
                    },
                    {
                      id: 23572,
                      name: "beef",
                      localizedName: "beef",
                      image: "beef-cubes-raw.png",
                    },
                    {
                      id: 4582,
                      name: "cooking oil",
                      localizedName: "cooking oil",
                      image: "vegetable-oil.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                  ],
                  length: {
                    number: 2,
                    unit: "minutes",
                  },
                },
                {
                  number: 7,
                  step: "Set the beef aside and clean out your pan with some paper towels.",
                  ingredients: [
                    {
                      id: 23572,
                      name: "beef",
                      localizedName: "beef",
                      image: "beef-cubes-raw.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 405895,
                      name: "paper towels",
                      localizedName: "paper towels",
                      image: "paper-towels.jpg",
                    },
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                  ],
                },
                {
                  number: 8,
                  step: "Bring 1 Tbsp oil to nearly smoking (high heat, but no smoke) and stir fry your vegetables for 2 minutes.",
                  ingredients: [
                    {
                      id: 11583,
                      name: "vegetable",
                      localizedName: "vegetable",
                      image: "mixed-vegetables.png",
                    },
                    {
                      id: 4582,
                      name: "cooking oil",
                      localizedName: "cooking oil",
                      image: "vegetable-oil.jpg",
                    },
                  ],
                  equipment: [],
                  length: {
                    number: 2,
                    unit: "minutes",
                  },
                },
                {
                  number: 9,
                  step: "Return the beef to the pan and add the sauce.",
                  ingredients: [
                    {
                      id: 0,
                      name: "sauce",
                      localizedName: "sauce",
                      image: "",
                    },
                    {
                      id: 23572,
                      name: "beef",
                      localizedName: "beef",
                      image: "beef-cubes-raw.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                  ],
                },
                {
                  number: 10,
                  step: "Stir everything together until nice and smooth, for less than a minute.",
                  ingredients: [],
                  equipment: [],
                },
                {
                  number: 11,
                  step: "Add the butter, and within less then another minute, you’re done!",
                  ingredients: [
                    {
                      id: 1001,
                      name: "butter",
                      localizedName: "butter",
                      image: "butter-sliced.jpg",
                    },
                  ],
                  equipment: [],
                },
              ],
            },
          ],
          spoonacularSourceUrl:
            "https://spoonacular.com/chinese-beef-and-broccoli-1697733",
          usedIngredientCount: 0,
          missedIngredientCount: 10,
          missedIngredients: [
            {
              id: 23232,
              amount: 1,
              unit: "lb",
              unitLong: "pound",
              unitShort: "lb",
              aisle: "Meat",
              name: "hanger steak",
              original: "1 lb hanger steak, thinly sliced against the grain",
              originalName: "hanger steak, thinly sliced against the grain",
              meta: ["thinly sliced"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/ribeye-raw.jpg",
            },
            {
              id: 1022053,
              amount: 0.25,
              unit: "c",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Ethnic Foods;Oil, Vinegar, Salad Dressing",
              name: "rice wine vinegar",
              original: "1/4 c rice wine vinegar",
              originalName: "rice wine vinegar",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/rice-vinegar.png",
            },
            {
              id: 20027,
              amount: 1,
              unit: "Tbsp",
              unitLong: "Tbsp",
              unitShort: "Tbsp",
              aisle: "Baking",
              name: "cornstarch",
              original: "1 Tbsp cornstarch",
              originalName: "cornstarch",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
            },
            {
              id: 11090,
              amount: 12,
              unit: "oz",
              unitLong: "ounces",
              unitShort: "oz",
              aisle: "Produce",
              name: "broccoli",
              original: "12 oz chopped broccoli",
              originalName: "chopped broccoli",
              meta: ["chopped"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/broccoli.jpg",
            },
            {
              id: 16124,
              amount: 6,
              unit: "Tbsp",
              unitLong: "Tbsps",
              unitShort: "Tbsp",
              aisle: "Ethnic Foods;Condiments",
              name: "soy sauce",
              original: "6 Tbsp soy sauce",
              originalName: "soy sauce",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/soy-sauce.jpg",
            },
            {
              id: 6175,
              amount: 0.25,
              unit: "c",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Ethnic Foods",
              name: "hoisin sauce",
              original: "1/4 c hoisin sauce",
              originalName: "hoisin sauce",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/dark-sauce.jpg",
            },
            {
              id: 6972,
              amount: 1,
              unit: "Tbsp",
              unitLong: "Tbsp",
              unitShort: "Tbsp",
              aisle: "Ethnic Foods",
              name: "sambal oelek",
              original: "1 Tbsp Sambal oelek (or your favorite chili sauce)",
              originalName: "Sambal oelek (or your favorite chili sauce)",
              meta: ["your favorite", "(or chili sauce)"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg",
            },
            {
              id: 1001,
              amount: 2,
              unit: "Tbsp",
              unitLong: "Tbsps",
              unitShort: "Tbsp",
              aisle: "Milk, Eggs, Other Dairy",
              name: "butter",
              original: "2 Tbsp butter",
              originalName: "butter",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
            },
            {
              id: 10211216,
              amount: 1,
              unit: "Tbsp",
              unitLong: "Tbsp",
              unitShort: "Tbsp",
              aisle: "Produce",
              name: "ginger",
              original: "1 Tbsp finely chopped fresh ginger (optional)",
              originalName: "finely chopped fresh ginger (optional)",
              meta: ["fresh", "finely chopped"],
              extendedName: "fresh ginger",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/ginger.png",
            },
            {
              id: 20444,
              amount: 2,
              unit: "c",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Pasta and Rice",
              name: "rice",
              original: "2 c rice",
              originalName: "rice",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/uncooked-white-rice.png",
            },
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: [],
        },
      ],

      meals: [
        {
          title: "Shrimp Tacos",
          img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Shrimp-Tacos-main-1.jpg",
        },
        {
          title: "Chicken Gyro",
          img: "https://www.jocooks.com/wp-content/uploads/2020/06/chicken-gyros-1-14.jpg",
        },
        {
          title: "Tuscan Chicken Pasta",
          img: "https://foodtasia.com/wp-content/uploads/2019/02/tuscan-pasta-20.jpg",
        },
        {
          title: "Flank Steak Sandwich",
          img: "https://i.guim.co.uk/img/media/fdcd34886d1d9aa696cbac74d1a3293aa4808895/0_680_6355_3814/master/6355.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8b6d0cb3ca5aa21a21d485bef8f481ba",
        },
        {
          title: "Mar y Tierra",
          img: "https://i.pinimg.com/originals/a1/0f/c0/a10fc083e8604ba604354599bced175f.jpg",
        },
        {
          title: "Chicken Burrito",
          img: "https://upload.wikimedia.org/wikipedia/commons/6/60/Burrito.JPG",
        },
      ],
      mealResults: [],
      cart: [],

      mealsInCart: [
        // {
        //   name: "Chicken Gyro",
        //   img: "https://www.jocooks.com/wp-content/uploads/2020/06/chicken-gyros-1-14.jpg",
        // },
        // {
        //   name: "Mar y Tierra",
        //   img: "https://i.pinimg.com/originals/a1/0f/c0/a10fc083e8604ba604354599bced175f.jpg",
        // },
      ],
      excludedIngredients: [
        "14412",
        "10014412",
        "20081",
        "19335",
        "4053",
        "1004513",
        "4582",
        "4513",
        "1002030",
        "2047",
        "1102047",
        "4053",
        "10719335",
        "10014412",
        "1002030",
        "20081",
        "1004513",
        "1012047",
        "19335",
        "4582",
        "2047",
        "1102047",
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      // getAccessToken: async () => {
      //   var settings = {
      //     async: true,
      //     crossDomain: true,
      //     url: "https://api.kroger.com/v1/connect/oauth2/token",
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded",
      //       Authorization:
      //         "Basic {{base64(“REACT_APP_CLIENT_ID:REACT_APP_CLIENT_SECRET”)}}",
      //     },
      //     data: {
      //       grant_type: "client_credentials",
      //       scope: "{{scope}}",
      //     },
      //   };

      //   $.ajax(settings).done(function (response) {
      //     console.log(response);
      //   });
      // },
      getAccessToken: async () => {
        let url = `https://api.kroger.com/v1/connect/oauth2/authorize?scope={product.compact}&response_type=code&client_id={chepup2-a2b5f7dd9d543cf2ec0c9027e5940d236852004030989503401}&redirect_uri={https://3000-jledner-chefup-35yn3crb3wh.ws-us38.gitpod.io/}`;
        fetch(url, {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
          .then((response) => {
            if (response.ok) return response.json();
            else throw new Error("help");
          })
          .then((response) => {
            JSON.stringify(response.results);
          });
      },
      getProducts: async (term) => {
        // Use access stored access token for product request
        let accessToken =
          "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJjaGVwdXAyLWEyYjVmN2RkOWQ1NDNjZjJlYzBjOTAyN2U1OTQwZDIzNjg1MjAwNDAzMDk4OTUwMzQwMSIsImV4cCI6MTY0ODA2NDU1MywiaWF0IjoxNjQ4MDYyNzQ4LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6ImRiMjg4MWQ5LTMzMmItNWNiOS04MTg0LWI2YWM3Y2ZlZDk4ZiIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjQ4MDYyNzUzMjYzMzc3NTE3LCJhenAiOiJjaGVwdXAyLWEyYjVmN2RkOWQ1NDNjZjJlYzBjOTAyN2U1OTQwZDIzNjg1MjAwNDAzMDk4OTUwMzQwMSJ9.ByanVIT4nCgNdB8XoNTyZniv41-qAUrbAhAOgBUU58peDhohZvHvjsQmmSsxi2bZJ1NVlXGSJRV8K0_T9AW9gptfiFAditlcex-ln1NL-PKJ-jNjES1-vbxPG6RRr7rHD0FxnXSkczowXam32BMetqBKOF3kjXDEokRIYL8kro0sIOEBPyXayEOOQ8D2mQvM9SF-w9bldFSpCXeLwFlt2nyNc-6qS1mwDZqurLcJxrvrCd2oMU1HVCnZnOumMbSckDpQg12bfAnM-DNzRNNKyaG7Z4XEbEyM8geNdAg6QiL1TAVdHqiniBtWyQcVTD19CoAKCKqX6R_PmX1dzwYrYw";
        // Use stored locationId
        let locationId = localStorage.getItem("locationId");

        // Use locationId as filter (if) selected by user
        let searchByLocation = "";
        if (locationId) {
          searchByLocation = `filter.locationId=${locationId}&`;
        }
        // Building product URL
        // Base URL (https://api.kroger.com)
        // Version/Endpoint (/v1/products)
        // Query String (?filter.locationId=${locationId}&filter.term=${term})
        // let productsUrl = `${config.apiBaseUrl}/v1/products?${searchByLocation}filter.term=${term}`;
        let productsUrl = `https://api.kroger.com/v1//products?filter.term=${term}&filter.limit=10`;
        // Product request body
        let productsResponse = await fetch(productsUrl, {
          method: "GET",
          cache: "no-cache",
          headers: {
            Authorization: `bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });
        const productsResponseJSON = productsResponse.json();
        // Return json object
        setStore({ productsResponseJSON: productsResponseJSON });
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      userLogin: async (user) => {
        await fetch(`${process.env.BACKEND_URL}/api/login`, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => (resp.ok ? resp.json() : new Error("help")))
          .then((resp) => {
            console.log(resp);
            // localStorage.setItem("userID", JSON.stringify(resp["id"]));
            resp.favorites = resp.favorites.map((favorite) => {
              return JSON.parse(favorite.meal);
            });
            let mealPrefs = {
              diets: ["Vegan"],
              intolerances: ["Peanut", "Sulfite"],
            };
            resp.mealPrefs = mealPrefs;
            localStorage.setItem("user", JSON.stringify(resp));
            setStore({ user: JSON.parse(localStorage.getItem("user")) });
          })
          .catch((e) => console.log(e));
      },
      favMealsToObj: (arr) => {
        return arr.map((fav) => JSON.parse(fav.meal));
      },
      setUser: (user) => {
        if (user != null) {
          setStore({ user: user });
        } else {
          setStore({ user: null });
        }
      },
      getMeals: async (url, query) => {
        const store = getStore();
        if (!localStorage[query]) {
          await fetch(url)
            .then((response) => {
              if (response.ok) return response.json();
              else throw new Error("help");
            })
            .then((response) => {
              localStorage.setItem(
                `${query}`,
                JSON.stringify(response.results)
              );
            });
          await setStore({
            mealResults: JSON.parse(localStorage.getItem(query)),
          });
        } else {
          setStore({
            mealResults: JSON.parse(localStorage.getItem(query)),
          });
        }
      },

      AddMealToCart: (meal) => {
        const store = getStore();
        let cart = [...store.cart, meal];
        setStore({ cart: cart });
      },

      deleteAMeal: (mealID) => {
        const store = getStore();
        let removed = store.cart.filter((meal) => meal.id != mealID);
        let cart = removed;
        setStore({ cart: cart });
      },

      addFavoriteMeal: (meal, userID) => {
        fetch(`${process.env.BACKEND_URL}/api/favorites/${userID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(meal),
        })
          .then((resp) => {
            if (resp.ok) return resp.json();
            else throw new Error("help");
          })
          .then((resp) => {
            /* 
              favMealsToObj converts the meal value in the respose back into a javascript obj. The whole spoonacular meal is currently
              stored in the db as a string.  Once converted the store is updated as well as the localStorage. 
            */
            let actions = getActions();
            let store = getStore();
            let user = resp;
            user.favorites = actions.favMealsToObj(user.favorites);
            user.mealPrefs = store.user.mealPrefs;
            setStore({ user: user });
            localStorage.setItem("user", JSON.stringify(user));
          })
          .catch((e) => console.log(e));
      },

      removeFavoriteMeal: (meal, userID) => {
        fetch(`${process.env.BACKEND_URL}/api/favorites/${userID}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(meal),
        })
          .then((resp) => {
            if (resp.ok) return resp.json();
            else throw new Error("help me pls");
          })
          .then((resp) => {
            let store = getStore();
            let actions = getActions();
            resp.favorites = actions.favMealsToObj(resp.favorites);
            resp.mealPrefs = store.user.mealPrefs;
            setStore({ user: resp });
            localStorage.setItem("user", JSON.stringify(resp));
          });
      },
      addIngredientsToGroceryList: (ingredient) => {
        const store = getStore();
        if (store.groceryListIngredients.includes(ingredient) == false) {
          let cart = [...store.groceryListIngredients, ingredient];
          setStore({ groceryListIngredients: cart });
        }

        console.log(store.groceryListIngredients);
      },

      deleteIngredientsInGroceryList: (moddedIngredientsArray) => {
        const store = getStore();

        setStore({ groceryListIngredients: moddedIngredientsArray });
        console.log(store.groceryListIngredients);
      },
    },
  };
};

export default getState;

// getMeals: async (url, query) => {
//   await fetch(url)
//     .then((response) => {
//       if (response.ok) return response.json();
//       else throw new Error("help");
//     })
//     .then((response) => {
//       localStorage.setItem(`${query}`, JSON.stringify(response.results));
//     });
//   await setStore({
//     mealResults: JSON.parse(localStorage.getItem(query)),
//   });
// },
