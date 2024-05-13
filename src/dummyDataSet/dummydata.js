

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const SLIDES =[
  {
    id:'1',
    images: require('../assets/images/Welcome-amico.png'),
    title:'Welcome To EasyShop',
    subtitle:'View Product 360 Degrees, You can See the product with all angles, true and convenient.'
  },
  {
    id:'2',
    images:  require('../assets/images/Userflow-pana.png'),
    title:'Find Products easily',
    subtitle:'You just need to tap on search and type and we will find similar product for you.'
  },
  {
    id:'3',
    images:  require('../assets/images/AddtoCart-pana.png'),
    title:'Add Product to cart',
    subtitle:'Choose your favorite product and add to cart.'
  },  {
    id:'4',
    images:  require('../assets/images/Mobilepayments-pana.png'),
    title:'Easy payment process',
    subtitle:'You can choose payment method which you have added and make payment easily.'
  },
  {
    id:'5',
    images:  require('../assets/images/Customerfeedback-pana.png'),
    title:'Give feedback to product and seller',
    subtitle:'Share your thoughts and help others by sharing your experience with the product and seller in a few words.'
  }

]



export const CUSTOMER_SLIDES =[
  {
    id:'1',
    images: require('../assets/images/Welcome-amico.png'),
    title:'Welcome To EasyShop',
    subtitle:'Organize your business so more people will reach out to you for your service!'
  },
  {
    id:'2',
    images:  require('../assets/images/Userflow-pana.png'),
    title:'Manage products',
    subtitle:'You just need to tap onsearch and type and we will find similar product for you.'
  },
  {
    id:'3',
    images:  require('../assets/images/AddtoCart-pana.png'),
    title:'Manage Orders',
    subtitle:'Easiest way of handlingthe orders that makes the Delivery process quickest!.'
  },  {
    id:'4',
    images:  require('../assets//images/Customerfeedback-pana.png'),
    title:'Give feedback to customer',
    subtitle:'You can choose payment method which you have added and make payment easily'
  },
]

export const PROFILE_PAGE =[
  {
    id:'1',
    iconName1: 'account-outline',
    iconName2:'rightcircle', 
    boxColor:"#ffefe5",
    title:'Account Details',
    navigationScreen:'AccountDetails',
    iconType: "MaterialCommunityIcons",
    iconColor:'black'

  },
  {
    id:'2',
    iconName1: 'language-outline',
    iconName2:'logout',
    boxColor:"#E5F7FF",
    title:'Language',
    navigationScreen:'Language',
    iconType: "Ionicons",
    iconColor:'black'

  },
  {
    id:'3',
    iconName1: 'card-outline',
    iconName2:'logout',
    boxColor:"#FEE7ED",
    title:'Payment Method',
    navigationScreen:'PaymentMethods',
    iconType: "Ionicons",
    iconColor:'black'

  },
  {
    id:'4',
    iconName1: 'location',
    iconName2:'logout',
    boxColor:"#D4FFDB",
    title:'Addresses',
    navigationScreen:'AllAddress',
    iconType: "EvilIcons",
    iconColor:'black'

  },
  {
    id:'5',
    iconName1: 'lock-open-outline',
    iconName2:'logout',
    boxColor:"#FFF2BE",
    title:'Change Password',
    navigationScreen:'ChangePassword',
    iconType: "Ionicons",
    iconColor:'black'

  },{
    id:'6',
    iconName1: 'gift-outline',
    iconName2:'logout',
    boxColor:"#E3E3E3",
    title:'My Coupans',
    navigationScreen:'CouponsList',
    iconType: "Ionicons",
    iconColor:'black'

  },
  {
    id:'7',
    iconName1: 'document-text-outline',
    iconName2:'logout',
    boxColor:"#ECB3B0",
    title:'Terms & Conditions',
    navigationScreen:'TemsAndCondition',
    iconType: "Ionicons",
    iconColor:'black'

  },
  {
    id:'8',
    iconName1: 'policy',
    iconName2:'logout',
    boxColor:"#FDE4FF",
    title:'Privacy Policy',
    navigationScreen:'PrivacyAndPolicy',
    iconType: "MaterialIcons",
    iconColor:'black'

  },
  {
    id:'9',
    iconName1: 'hands-helping',
    iconName2:'logout',
    boxColor:"#CEDCFF",
    title:'Help & Supports',
    navigationScreen:'HelpsAndSupports',
    iconType: "FontAwesome5",
    iconColor:'black'

  },
  {
    id:'10',
    iconName1: 'frequently-asked-questions',
    iconName2:'logout',
    boxColor:"#FFE4CF",
    title:'FAQs',
    navigationScreen:'FAQs',
    iconType: "MaterialCommunityIcons",
    iconColor:'black'

  }
]


export const FOLLOWERSLIST =[
  {
    images:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userId:"Dave_W",
    name:"Dave Wilson",
  },
  {
    images:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userId:"MissRachel",
    name:"Rachel Fein",
  },
  {
    images:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userId:"Jece.MaDonald",
    name:"Jace McDonalad",
  },
  {
    images:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userId:"Jack_11",
    name:"Jackson Haunesy",
  },
  {
    images:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userId:"Dave_W",
    name:"Dave Wilson",
  },
  {
    images:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userId:"MissRachel",
    name:"Rachel Fein",
  },
  {
    images:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userId:"Jece.MaDonald",
    name:"Jace McDonalad",
  },
  {
    images:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userId:"Jack_11",
    name:"Jackson Haunesy",
  },
  {
    images:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userId:"Dave_W",
    name:"Dave Wilson",
  },
  {
    images:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userId:"MissRachel",
    name:"Rachel Fein",
  },
  {
    images:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userId:"Jece.MaDonald",
    name:"Jace McDonalad",
  },
  {
    images:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userId:"Jack_11",
    name:"Jackson Haunesy",
  }
]


export const REWARDSHISTORY =[
  {
    points:'50',
    descriptions:"Johnsom Williamson's Poll"
  },
  {
    points:'25',
    descriptions:"Alisha Peterson's Poll"
  },
  {
    points:'50',
    descriptions:"Johnsom Williamson's Poll"
  },
  {
    points:'30',
    descriptions:"Alisha Peterson's Poll"
  },
  {
    points:'50',
    descriptions:"Johnsom Williamson's Poll"
  },
  {
    points:'50',
    descriptions:"Alisha Peterson's Poll"
  }
]


// export const MY_POST =[
//   {
//     image:,
//     description:,
// icon2:,
// totallike:,
// comments:,
// commentsDescription:

//   }
// ]

const styles = StyleSheet.create({})