import axios from "axios";
import { API_URL, del, get, post, put } from "./api_helper";
import * as url from "./url_helper";


export const registeruser = ({number}: {number: string}) =>  post(url.USER_REGISTER, {number});
export const getallusers = () => get(url.GET_ALL_USERS);

export const getplayerprofile = (id: string) => get(`${url.GET_PLAYER_PROFILE}/${id}`);
export const followplayer = (id: string) => post(url.FOLLOW_PLAYER, {id});
export const unfollowplayer = (id: string) => post(url.UNFOLLOW_PLAYER, {id});