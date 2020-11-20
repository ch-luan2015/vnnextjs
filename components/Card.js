import React from 'react'
import {
  List,
  ListItem,
  ListIcon,
  Text,
  Box,
  useColorMode,
  Avatar
} from '@chakra-ui/core';
export default function Card() {
  return (
    <Box
      w="full"
      rounded="md"
      overflow="hidden"
      boxShadow="lg"
      backgroundColor="white"
    >

      <div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">

        <div className="w-full flex justify-between p-3">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />

        </div>

        <img className="w-full bg-cover" src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG" />

        <div className="px-3 pb-2">
          <div className="pt-2">
            <i className="far fa-heart cursor-pointer" />
            <span className="text-sm text-gray-400 font-medium">12 likes</span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">braydoncoyer</span> Lord of the Rings is my favorite film-series. One day I'll make my way to New Zealand to visit the Hobbiton set!
            </div>
          </div>

          <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">View all 14 comments</div>

          <div className="mb-2">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">razzle_dazzle</span> Dude! How cool! I went to New Zealand last summer and had a blast taking the tour! So much to see! Make sure you bring a good camera when you go!
           </div>
          </div>

        </div>
      </div>

    </Box>

  )
}
