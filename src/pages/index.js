// src/pages/index.js
import React from 'react';
import {ChakraProvider, Flex, Box} from '@chakra-ui/react';
import ResponsiveContainer from "../Components/ResponsiveContainers";
import ImageBackground from "../Components/Background";
import ProfileHeader from "../Components/ProfileHeader";
import ProfileImage from "../Components/Profile/ProfileImage";
import ProfileName from "../Components/Profile/ProfileName";
import BodyBold from "../Components/BodyBold";
import BodyText from "../Components/BodyText";
import ResponsiveContents from "../Components/ResponsiveContents";
import OccupationText from "../Components/OccupationText";
import PersonalInfo from "../Components/Profile/PersonalInfo";
import ProfileGalleryList from "../Components/Profile/ProfileGalleryList";
import ProfileIcons from "../Components/Profile/ProfileIcons";


const Index=()=> {
    return (
        <ChakraProvider>
            <Box position="fixed" top={0} left={0} width="100%" height="100%" zIndex={-1}>
            <ImageBackground />
            </Box>
                {/*<Box*/}
                {/*    //position="relative"*/}
                {/*    height="100vh" // Full viewport height*/}
                {/*    display="flex"*/}
                {/*    justifyContent="center"*/}
                {/*    alignItems="center"*/}
                {/*    overflowY="auto"*/}
                {/*    zIndex={1}*/}
                {/*    position="relative"*/}
                {/*>*/}
                <ResponsiveContainer>
                    <ProfileHeader/>
                    <Flex
                        //gap="5px"
                        direction={['column', 'column', 'row']}  // Stack vertically on mobile/tablet, side-by-side on desktop
                        justifyContent="space-between"          // Space between the two columns
                        alignItems="center"                 // Align items at the top of the row
                        wrap="wrap"
                        mx ="auto"
                        maxWidth="95%"
                        mt="20px"
                    >
                        <Box
                            position="absoute"
                            pt={['10px', '10px', '255px']}
                        >
                            {/*name*/}
                            <ProfileName>Bernard Okuku</ProfileName>
                            <Flex
                                pl="50px"
                            >

                                {/*occupation*/}
                                <OccupationText>Structural Engineer</OccupationText>
                            </Flex>

                        </Box>

                        {/*profile picture*/}
                        <ProfileImage
                          imagePaths={[
                            '/images/001.png'
                            // Add more image paths as needed
                          ]}
                        >
                        </ProfileImage>
                    </Flex>

                    <Flex
                      direction={['column', 'column', 'row']}  // Stack vertically on mobile/tablet, side-by-side on desktop
                      justifyContent="space-between"          // Space between the two columns
                      alignItems="center"                 // Align items at the top of the row
                      //gap="10px"                              // Space between the two columns
                      wrap="wrap"                             // Allow wrapping if needed on smaller screens
                    >
                       {/*Personal Information */}
                      <ResponsiveContents>
                        <BodyBold>Personal Information</BodyBold>
                        <PersonalInfo label="Name:" value="Austine Ajwang" />
                        <PersonalInfo label="DOB:" value="01 April 2000" />
                        <PersonalInfo label="Email:" value="kajwangeinstein@gmail.com" isItalic={true} />
                        <PersonalInfo label="Phone No:" value="0769998444" />
                        <PersonalInfo label="Occupation:" value="Software Engineer" />
                      </ResponsiveContents>

                      {/* Interests */}
                      <ResponsiveContents>
                        <BodyBold>Interests</BodyBold>
                        <PersonalInfo value="Technology and Innovation" isItalic={true} />
                        <PersonalInfo value="Artificial Intelligence" isItalic={true} />
                        <PersonalInfo value="Human behavioural Aspects and Habits" isItalic={true} />
                        <PersonalInfo value="Family, Society and their interactions" isItalic={true} />
                        <PersonalInfo value="Culture" isItalic={true} />
                      </ResponsiveContents>
                    </Flex>

                    {/*aboutMe*/}
                    <ResponsiveContents>
                        <BodyBold>About Me</BodyBold>
                        <BodyText>I am a Computer Science graduate from KCA University, specializing in Information Security
                                    and Cyber Forensics. My education provided me with a strong foundation in cybersecurity
                                    principles, network defense, and digital forensics. I’m skilled in identifying and mitigating
                                    cyber threats and have hands-on experience with various tools and technologies in the field.
                                    With a passion for safeguarding digital information, I am dedicated to staying ahead of
                                    evolving threats and contributing to the creation of secure, resilient digital environments
                                    through continuous learning and effective collaboration.
                        </BodyText>
                    </ResponsiveContents>

                    <ResponsiveContents>
                        <BodyBold>Gallery</BodyBold>
                        <ProfileGalleryList/>
                        <Flex
                          direction="row"        // Align items horizontally (default)
                          justifyContent="center"  // Distribute space evenly between children
                          alignItems="center"    // Align items vertically in the center
                          gap="5px"             // Add spacing between the items (adjust as needed)
                          wrap="wrap"            // Allows wrapping if items don’t fit in a single row
                          mt={4}
                        >
                            <BodyText>See all</BodyText>
                        </Flex>
                    </ResponsiveContents>
                    <ProfileIcons/>

                </ResponsiveContainer>
            {/*</Box>*/}
        </ChakraProvider>
    );
};
export default Index;
