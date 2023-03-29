"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3362],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return a?i.createElement(h,s(s({ref:t},m),{},{components:a})):i.createElement(h,s({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const r={sidebar_position:2},s="ML Algorithms",o={unversionedId:"ML-Based Zero Day Detection/ml-algorithms",id:"ML-Based Zero Day Detection/ml-algorithms",title:"ML Algorithms",description:"Here we discuss about the ML Algorithms used to implement the models from the research paper.",source:"@site/docs/ML-Based Zero Day Detection/ml-algorithms.md",sourceDirName:"ML-Based Zero Day Detection",slug:"/ML-Based Zero Day Detection/ml-algorithms",permalink:"/CyberSec-NGIT/docs/ML-Based Zero Day Detection/ml-algorithms",draft:!1,editUrl:"https://github.com/stealthspectre/CyberSec-NGIT/docs/ML-Based Zero Day Detection/ml-algorithms.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Research Paper",permalink:"/CyberSec-NGIT/docs/ML-Based Zero Day Detection/research-paper"}},l={},c=[{value:"Decision Tree",id:"decision-tree",level:2},{value:"Decision Tree Terminologies",id:"decision-tree-terminologies",level:3},{value:"Random Forest",id:"random-forest",level:2},{value:"KNN",id:"knn",level:2},{value:"Na\xefve Bayes",id:"na\xefve-bayes",level:2},{value:"Types of Na\xefve Bayes Model:",id:"types-of-na\xefve-bayes-model",level:3},{value:"QDA",id:"qda",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ml-algorithms"},"ML Algorithms"),(0,n.kt)("p",null,"Here we discuss about the ML Algorithms used to implement the models from the research paper."),(0,n.kt)("h2",{id:"decision-tree"},"Decision Tree"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Decision Tree is a\xa0",(0,n.kt)("strong",{parentName:"li"},"Supervised learning technique"),"\xa0that can be used for both classification and Regression problems, but mostly it is preferred for solving Classification problems. It is a tree-structured classifier, where\xa0",(0,n.kt)("strong",{parentName:"li"},"internal nodes represent the features of a dataset, branches represent the decision rules"),"\xa0and\xa0",(0,n.kt)("strong",{parentName:"li"},"each leaf node represents the outcome.")),(0,n.kt)("li",{parentName:"ul"},"In a Decision tree, there are two nodes, which are the\xa0",(0,n.kt)("strong",{parentName:"li"},"Decision Node"),"\xa0and\xa0",(0,n.kt)("strong",{parentName:"li"},"Leaf Node."),"\xa0Decision nodes are used to make any decision and have multiple branches, whereas Leaf nodes are the output of those decisions and do not contain any further branches."),(0,n.kt)("li",{parentName:"ul"},"The decisions or the test are performed on the basis of features of the given dataset."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"It is a graphical representation for getting all the possible solutions to a problem/decision based on given conditions.")),(0,n.kt)("img",{parentName:"li",src:"https://i.imgur.com/3eG4xzv.png",alt:null})),(0,n.kt)("li",{parentName:"ul"},"Decision Trees usually mimic human thinking ability while making a decision, so it is easy to understand."),(0,n.kt)("li",{parentName:"ul"},"The logic behind the decision tree can be easily understood because it shows a tree-like structure.")),(0,n.kt)("h3",{id:"decision-tree-terminologies"},"Decision Tree Terminologies"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Root Node:"),"\xa0Root node is from where the decision tree starts. It represents the entire dataset, which further gets divided into two or more homogeneous sets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Leaf Node:"),"\xa0Leaf nodes are the final output node, and the tree cannot be segregated further after getting a leaf node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Splitting:"),"\xa0Splitting is the process of dividing the decision node/root node into sub-nodes according to the given conditions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Branch/Sub Tree:"),"\xa0A tree formed by splitting the tree."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pruning:"),"\xa0Pruning is the process of removing the unwanted branches from the tree."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parent/Child node:"),"\xa0The root node of the tree is called the parent node, and other nodes are called the child nodes.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"random-forest"},"Random Forest"),(0,n.kt)("p",null,"Random Forest is a popular machine learning algorithm that belongs to the supervised learning technique. It can be used for both Classification and Regression problems in ML. It is based on the concept of\xa0",(0,n.kt)("strong",{parentName:"p"},"ensemble learning,"),"\xa0which is a process of\xa0",(0,n.kt)("em",{parentName:"p"},"combining multiple classifiers to solve a complex problem and to improve the performance of the model.")),(0,n.kt)("p",null,"As the name suggests,\xa0",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},'"Random Forest is a classifier that contains a number of decision trees on various subsets of the given dataset and takes the average to improve the predictive accuracy of that dataset."')),"\xa0Instead of relying on one decision tree, the random forest takes the prediction from each tree and based on the majority votes of predictions, and it predicts the final output."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The greater number of trees in the forest leads to higher accuracy and prevents the problem of overfitting."),"\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/yiMrCLS.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It takes less training time as compared to other algorithms."),(0,n.kt)("li",{parentName:"ul"},"It predicts output with high accuracy, even for the large dataset it runs efficiently."),(0,n.kt)("li",{parentName:"ul"},"It can also maintain accuracy when a large proportion of data is missing."),(0,n.kt)("li",{parentName:"ul"},"Random Forest is capable of performing both Classification and Regression tasks."),(0,n.kt)("li",{parentName:"ul"},"It is capable of handling large datasets with high dimensionality."),(0,n.kt)("li",{parentName:"ul"},"It enhances the accuracy of the model and prevents the overfitting issue.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"knn"},"KNN"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/blog/knn"},"K-Nearest Neighbour")," is one of the simplest Machine Learning algorithms based on Supervised Learning technique."),(0,n.kt)("li",{parentName:"ul"},"K-NN algorithm assumes the similarity between the new case/data and available cases and put the new case into the category that is most similar to the available categories."),(0,n.kt)("li",{parentName:"ul"},"K-NN algorithm stores all the available data and classifies a new data point based on the similarity. This means when new data appears then it can be easily classified into a well suite category by using K- NN algorithm."),(0,n.kt)("li",{parentName:"ul"},"K-NN algorithm can be used for Regression as well as for Classification but mostly it is used for the Classification problems."),(0,n.kt)("li",{parentName:"ul"},"K-NN is a\xa0",(0,n.kt)("strong",{parentName:"li"},"non-parametric algorithm"),", which means it does not make any assumption on underlying data."),(0,n.kt)("li",{parentName:"ul"},"It is also called a\xa0",(0,n.kt)("strong",{parentName:"li"},"lazy learner algorithm"),"\xa0because it does not learn from the training set immediately instead it stores the dataset and at the time of classification, it performs an action on the dataset."),(0,n.kt)("li",{parentName:"ul"},"KNN algorithm at the training phase just stores the dataset and when it gets new data, then it classifies that data into a category that is much similar to the new data.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/xEIToSu.png",alt:null}),"\nSuppose there are two categories, i.e., Category A and Category B, and we have a new data point x1, so this data point will lie in which of these categories. To solve this type of problem, we need a K-NN algorithm. With the help of K-NN, we can easily identify the category or class of a particular dataset. Consider the below diagram:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'There is no particular way to determine the best value for "K", so we need to try some values to find the best out of them. The most preferred value for K is 5.'),(0,n.kt)("li",{parentName:"ul"},"A very low value for K such as K=1 or K=2, can be noisy and lead to the effects of outliers in the model."),(0,n.kt)("li",{parentName:"ul"},"Large values for K are good, but it may find some difficulties."),(0,n.kt)("li",{parentName:"ul"},"It is simple to implement."),(0,n.kt)("li",{parentName:"ul"},"It is robust to the noisy training data"),(0,n.kt)("li",{parentName:"ul"},"It can be more effective if the training data is large."),(0,n.kt)("li",{parentName:"ul"},"Always needs to determine the value of K which may be complex some time."),(0,n.kt)("li",{parentName:"ul"},"The computation cost is high because of calculating the distance between the data points for all the training samples.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"na\xefve-bayes"},"Na\xefve Bayes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/blog/gaussian"},"[Na\xefve Bayes]")," algorithm is a supervised learning algorithm, which is based on\xa0",(0,n.kt)("strong",{parentName:"li"},"Bayes theorem"),"\xa0and used for solving classification problems."),(0,n.kt)("li",{parentName:"ul"},"It is mainly used in\xa0",(0,n.kt)("em",{parentName:"li"},"text classification"),"\xa0that includes a high-dimensional training dataset."),(0,n.kt)("li",{parentName:"ul"},"Na\xefve Bayes Classifier is one of the simple and most effective Classification algorithms which helps in building the fast machine learning models that can make quick predictions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"It is a probabilistic classifier, which means it predicts on the basis of the probability of an object"),"."),(0,n.kt)("li",{parentName:"ul"},"Some popular examples of Na\xefve Bayes Algorithm are\xa0",(0,n.kt)("strong",{parentName:"li"},"spam filtration, Sentimental analysis, and classifying articles"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Na\xefve"),": It is called Na\xefve because it assumes that the occurrence of a certain feature is independent of the occurrence of other features. Such as if the fruit is identified on the bases of color, shape, and taste, then red, spherical, and sweet fruit is recognized as an apple. Hence each feature individually contributes to identify that it is an apple without depending on each other."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Bayes"),": It is called Bayes because it depends on the principle of\xa0",(0,n.kt)("a",{parentName:"li",href:"https://www.javatpoint.com/bayes-theorem-in-artifical-intelligence"},"Bayes' Theorem"),"."),(0,n.kt)("li",{parentName:"ul"},"Na\xefve Bayes is one of the fast and easy ML algorithms to predict a class of datasets."),(0,n.kt)("li",{parentName:"ul"},"It can be used for Binary as well as Multi-class Classifications."),(0,n.kt)("li",{parentName:"ul"},"It performs well in Multi-class predictions as compared to the other Algorithms."),(0,n.kt)("li",{parentName:"ul"},"It is the most popular choice for\xa0",(0,n.kt)("strong",{parentName:"li"},"text classification problems"),"."),(0,n.kt)("li",{parentName:"ul"},"Naive Bayes assumes that all features are independent or unrelated, so it cannot learn the relationship between features."),(0,n.kt)("li",{parentName:"ul"},"It is used for\xa0",(0,n.kt)("strong",{parentName:"li"},"Credit Scoring"),"."),(0,n.kt)("li",{parentName:"ul"},"It is used in\xa0",(0,n.kt)("strong",{parentName:"li"},"medical data classification"),"."),(0,n.kt)("li",{parentName:"ul"},"It can be used in\xa0",(0,n.kt)("strong",{parentName:"li"},"real-time predictions"),"\xa0because Na\xefve Bayes Classifier is an eager learner."),(0,n.kt)("li",{parentName:"ul"},"It is used in Text classification such as\xa0",(0,n.kt)("strong",{parentName:"li"},"Spam filtering"),"\xa0and\xa0",(0,n.kt)("strong",{parentName:"li"},"Sentiment analysis"),".")),(0,n.kt)("h3",{id:"types-of-na\xefve-bayes-model"},"Types of Na\xefve Bayes Model:"),(0,n.kt)("p",null,"There are three types of Naive Bayes Model, which are given below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Gaussian"),": The Gaussian model assumes that features follow a normal distribution. This means if predictors take continuous values instead of discrete, then the model assumes that these values are sampled from the Gaussian distribution."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Multinomial"),": The Multinomial Na\xefve Bayes classifier is used when the data is multinomial distributed. It is primarily used for document classification problems, it means a particular document belongs to which category such as Sports, Politics, education, etc.",(0,n.kt)("br",{parentName:"li"}),"The classifier uses the frequency of words for the predictors."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Bernoulli"),": The Bernoulli classifier works similar to the Multinomial classifier, but the predictor variables are the independent Booleans variables. Such as if a particular word is present or not in a document. This model is also famous for document classification tasks.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"qda"},"QDA"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Refer to this ",(0,n.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/quadratic-discriminant-analysis/"},"geeks4geeks")," link")))}d.isMDXComponent=!0}}]);