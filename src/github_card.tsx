import React, { useState, useEffect } from "react";
import axios from "axios";

import { IProfile, IProps } from "./github_card.interface"
import map from "../public/map-ping.svg";



const GithubCard = ({ name, repository, type, widht, height }: IProps) => {
    const [profile, setProfile] = useState<IProfile | null>(null);
    // const { name, repository, type, widht, height, useCache = false } = props


    useEffect(() => {
        let url: string;
        if (type === "user") {
            url = `https://api.github.com/users/${name || "basskibo"}`;
        } else {
            url = `https://api.github.com/users/${name || "basskibo"}/${repository}`;
        }


        const fetchData = async () => {
            try {
                // const profileInLocaleStorage = localStorage.getItem("profile");
                let profileFetched;
                // if (!profileInLocaleStorage) {
                const response = await axios.get(
                    url
                    // , {
                    // 	headers: {
                    // 		Authorization: "token 6888b5336f1fbc75edb8de9961846462e0e1c218",
                    // 	},
                    // }
                );
                // localStorage.setItem("profile", JSON.stringify(response.data));
                profileFetched = response.data;
                // } else {
                // profileFetched = JSON.parse(profileInLocaleStorage);
                // }
                setProfile(profileFetched);
            } catch (error) {
                console.log("error", error);
            }
        };

        // const existingProfile = window.localStorage.getItem("github_profile") || "basskibo";

        // if (!existingProfile) {
        fetchData();
        // } else {
        //     setProfile(existingProfile);
        // }
    }, []);

    return (
        <div style={{
            width: widht || 300, height: height || 350, backgroundColor: "#22272E", color: "#768390", border: "1px solid gray",
            borderRadius: 10, padding: 10
        }}>
            {
                profile ? (
                    <div style={{ color: "#768390" }}>
                        <a href={profile.html_url} target='_blank' rel='noreferrer'>
                            <p className='text-white font-extrabold text-xl mb-3 inline-flex'
                                style={{
                                    color: "#FFF" || "#539BF5", display: "flex",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                    fontSize: 25,
                                    alignItems: "center",
                                    margin: "0 auto",
                                    textDecoration: "none"

                                }}>

                                {/* <SiGithub className='' />  */}@{profile.login}
                            </p>
                            <div>
                                <img
                                    alt='profile avatar'
                                    // layout="fill"
                                    // width="50" height="50"
                                    src={profile.avatar_url}
                                    style={{
                                        width: 150, height: 150, borderRadius: 400 / 2,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "10px auto"
                                    }}

                                    className='w-full h-40 border border-gray-400'
                                />
                            </div>
                            <div style={{ color: "#cecece", fontSize: 15, paddingRight: 5, margin: "5px 10px" }}>
                                <div className='  mt-1'>

                                    <p style={{ fontStyle: "italic", color: "#768390" }}>
                                        {profile.bio ? profile.bio : "No bio..."}
                                    </p>


                                </div >
                                <div style={{ display: "flex", justifyContent: "left", flexWrap: "wrap", gap: 10, marginTop: 15 }}>
                                    {/* <FiUsers className='h-full mt-0.1 inline-flex' />{" "} */}
                                    <span style={{ color: "#768390", paddingRight: 5 }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    </span>
                                    <span>
                                        Following <b>{profile.following}</b>
                                    </span>
                                    <span>
                                        Followers <b>{profile.followers}</b>
                                    </span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "left", gap: 10, marginTop: 5 }}>
                                    {profile.location ? <span style={{ color: "#768390", paddingRight: 5 }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-map-pin" ><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </span> : <></>}


                                    <span className='mx-3'>{profile.location}</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "left", gap: 10, marginTop: 5 }}>
                                    {/* <RiGitRepositoryCommitsLine className='h-full mt-0.1 inline-flex' />{" "} */}
                                    <span style={{ color: "#768390", paddingRight: 5 }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M6 10v10h13V10H6zm12-2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-9 3h2v2H7v-2zm0 3h2v2H7v-2zm0 3h2v2H7v-2z" fill="rgba(118,131,144,1)" /></svg>
                                    </span>
                                    <span className='mx-3'>
                                        Public repositories <b>{profile.public_repos}</b>
                                    </span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "left", gap: 10, marginTop: 5 }}>
                                    <span style={{ color: "#768390", paddingRight: 5 }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z" fill="rgba(118,131,144,1)" /></svg>                                    </span>
                                    {/* <RiGitRepositoryPrivateLine className='h-full mt-0.1 inline-flex' />{" "} */}
                                    <span className='mx-3'>
                                        Private repositories{" "}
                                        <b>{profile.total_private_repos || 6}</b>
                                    </span>
                                </div>
                            </div>

                        </a >
                    </div >
                ) : (
                    <></>
                )}
        </div >
    );
}




export default GithubCard;