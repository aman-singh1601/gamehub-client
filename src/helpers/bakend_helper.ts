import axios from "axios";
import { API_URL, del, get, post, put } from "./api_helper";
import * as url from "./url_helper";


export const registeruser = ({number}: {number: string}) =>  post(url.USER_REGISTER, {number});
export const getallusers = () => get(url.GET_ALL_USERS);
export const getfollowingusers = () => get(url.GET_FOLLOWING_USERS);

export const getplayerprofile = (id: string) => get(`${url.GET_PLAYER_PROFILE}/${id}`);

export const followplayer = (id: string) => post(url.FOLLOW_PLAYER, {id});
export const unfollowplayer = (id: string) => post(url.UNFOLLOW_PLAYER, {id});

export const blockplayer = (id: string) => post(`${url.BLOCK_PLAYER}`, {id});
export const unblockplayer = (id: string) => del(`${url.BLOCK_PLAYER}/${id}`);


export const getstreamcred = () => get(`${url.GENERATE__STREAM}`);
