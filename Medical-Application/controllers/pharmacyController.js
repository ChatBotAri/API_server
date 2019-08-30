import routes from "../routes";

import Pharmacy from "../models/Pharmacy";
//import { database } from "../db";

export const video = (req,res) => res.render("home",{pagetitle:"upload"});


export const getPharmacyName = async (req,res) => {
	console.log(1);
//	let db;
	const {
		query:{
			name : searchingBy
		}
	} = req;
//	query 만들어 주는 부분
 
	let pharmacys;
	
	try{
		pharmacys = await Pharmacy.find({
			dutyName : {
				_text :searchingBy
			}
		})
		console.log(pharmacys);
	}catch(error){
		console.log(error);
	}
	res.json(pharmacys);
};
