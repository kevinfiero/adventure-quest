export default [
    {
        id: 'village',
        nextId: 'wall',
        title: 'Cave of Gold',
        image: '../assets/cave.jpg',
        description: 'As you set off on your adventure you stumble upon a cave of gold! Lucky you! Overjoyed with happiness you head off to the next village and treat yourself at the local tavern. You buy a round of drinks for everyone and tell them the story. At some point in the night an older woman approaches you and asks if you could help her pay for contractors to help rebuild her neighborhood that burned down. What do you say?',
        choices: [
            {
                id: 'selfish',
                description: 'Finders keepers! You\'re lucky I bought you all drinks tonight!',
                outcome: 'You keep all of the gold you found but the villagers are not happy with you for your selfishness. You leave town immediately in fear of getting your treasure stolen.',
                gold: 50,
                rep: -30
            },
            {
                id: 'moderate',
                description: 'I can spare a few gold just for you but your neighbors will need to find their own way.',
                outcome: 'The woman is extremely grateful. The rest of the tavern gives you a cheers and you continue with your drinks.',
                gold: 25,
                rep: 20
            },
            {
                id: 'charity',
                description: 'I\'m on this adventure for the fun and don\'t need all this gold weighing me down! Please use all of this gold to rebuild your neighborhood!',
                outcome: 'The tavern errupts in cheering and applause. The villagers are so elated that they tell you to come by anytime for free food, drink, and lodging!',
                gold: 0,
                rep: 50
            }
        ]
    }
    ,
    {
        id: 'wall',
        nextId: 'pier',
        title: 'Wall Maria',
        image: '../assets/wall.png',
        description: 'As you continue on your journey you approach a large wall. As you get closer a man yells from an outlet on the middle of the wall, "What is your business here?"',
        choices: [
            {
                id: 'sneaky',
                description: 'This wall and man look intimidating. You turn around.',
                outcome: 'As you proceed to leave the wall you notice a boy who is willing to escort you through the nearby dense forest. On your journey you encounter a wild horse stuck in a hunter\'s trap. You release the horse, tend to it\'s wounds, and leave it with the boy after you clear the woods.',
                gold: 0,
                rep: 20
            },
            {
                id: 'brazen',
                description: 'I\'m in no mood to negotiate. Let me through now!',
                outcome: 'The man is not happy. You pull out your long range weapon and kill the man. He drops to the ground and you gain his gold and a map on how to gain access to the wall. On the other side of the keep you steal a horse and guards chase after you. After the chaos you cause, you narrowly escape into the woods under the darkness of night.',
                gold: 30,
                rep: -20
            },
            {
                id: 'bribe',
                description: 'I need to get past here for my adventure. I can offer you something in return for letting me through.',
                outcome: 'The guard lets you through the gates. On the other side you find shops and markets. You grab a few supplies, meet a few new friends, and head on your way.',
                gold: -20,
                rep: 10
            }
        ]
    },
    {
        id: 'pier',
        nextId: 'castle',
        title: 'Odin\'s Port',
        image: '../assets/pier.jpg',
        description: 'After walking for days you finally reach a city on a port. You can see an island across the way with a huge castle! You meet one of the dock owners and he offers to help you get across. Which vessel do you take?',
        choices: [
            {
                id: 'small',
                description: 'Rowboat',
                outcome: 'The man offers you a deal. If you bring the rowboat to his cousin across the way he will let you ride it for free. You gain his admiration for paddling yourself such a far way!',
                gold: 0,
                rep: 20
            },
            {
                id: 'medium',
                description: 'Sailboat',
                outcome: 'You\'re tired from your journey and want the wind to do the work for you. You grab a decent looking sailboat and continue on you way.',
                gold: -20,
                rep: 10
            },
            {
                id: 'large',
                description: 'Ship',
                outcome: 'You rent a large ship and invite a few locals to join you to party along the way. You charge them a fee to join your journey. However, with all the partying going on nobody noticed shore slowly approaching. The locals on land yell but it is too late - the ship crashes through the pier and causes significant damages. You flee the scene.',
                gold: 50,
                rep: -30
            }
        ]
    },
    {
        id: 'castle',
        nextId: 'village',
        title: 'Castle',
        image: '../assets/castle.jpg',
        description: 'Now that you have your land legs again you trek to the castle gates. What do you do?',
        choices: [
            {
                id: 'risky',
                description: 'Jump the wall.',
                outcome: 'You evade the guards and make it into the castle. You manage to make your way to the treasure room and grab a handful of gems and other valuable items you can sell later.',
                gold: 100,
                rep: -30
            },
            {
                id: 'polite',
                description: 'Talk to the guard.',
                outcome: 'You chat with the guard who is interested to hear about your adventure so far. He lets you through the gates to explore the castle interior and converse with the nobles.',
                gold: 0,
                rep: 30
            },
            {
                id: 'nothing',
                description: 'Look at the view.',
                outcome: 'You soak in the view as your quest comes to an end. While you are enjoying the day you stumble across a small amount of gold.',
                gold: 10,
                rep: 0
            }
        ]
    }
];
    
    
    
    
    






