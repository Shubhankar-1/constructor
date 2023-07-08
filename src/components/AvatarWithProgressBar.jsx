import { Avatar, Badge, CircularProgress } from '@mui/material';
import Image from 'next/image';
import React from 'react'

function AvatarWithProgressBar({avatar, progress}) {
  return (
      <div className="relative inline-block">
          <Avatar className="bg-[#ffcb3366]" sx={{ width: 110, height: 110 }}>
              <Image src={avatar} alt="avatar" width={110} />
          </Avatar>
          <CircularProgress
              className="text-[#3361FF]"
              size={"130px"}
              value={progress}
              determinate
              thickness="0.8"
              style={{
                  transform: "scaleX(-1) rotate(-90deg)",
                  position: "absolute",
                  top: -10,
                  left: -10,
              }}>
              <Badge
                  color="primary"
                  badgeContent="2"
                  style={{
                      position: "absolute",
                      transform: "translate(-50%, -50%)",
                      zIndex: 10,
                  }}
              />
          </CircularProgress>
      </div>
  );
}

export default AvatarWithProgressBar