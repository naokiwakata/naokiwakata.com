import fs from 'fs'

import { Metadata } from 'next'
import {
  theme as chakraTheme,
  Box,
  Heading,
  Stack,
  HStack,
  Center,
  Text,
  Image,
  extendTheme,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import path from 'path';

export const metadata: Metadata = {
  title: 'naokiwakata.com',
}

const { Button } = chakraTheme.components

export default async function Page() {
  const pages = await getAboutMe()
  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Stack padding={"16px"} maxWidth={"700px"}>
        <Heading as={"h1"} size={"xl"} paddingBottom={4}>
          This is naokiwakata.com!
        </Heading>

        <Heading as={"h2"} size={"lg"} >LINK</Heading>

        <HStack paddingBottom={"24px"}>
          <Link href={"https://github.com/naokiwakata"}>
            <Box boxShadow={"dark-lg"} rounded={24} bg={"black"}>
              <Center color={'white'} h={"80px"} w={"130px"} fontSize={"28px"} fontWeight={"bold"}>
                GitHub
              </Center>
            </Box>
          </Link>

          <Link href={"https://x.com/wakanao_banana"}>
            <Box boxShadow={"dark-lg"} rounded={24} bg={"black"}>
              <Center color={'white'} h={"80px"} w={"130px"} fontSize={"40px"} fontWeight={"bold"}>
                X
              </Center>
            </Box>
          </Link>

        </HStack>

        <Heading as={"h2"} size={"lg"} >ABOUT ME</Heading>

        <Text whiteSpace="pre-line" paddingBottom={"24px"} lineHeight={"18px"}>
          {pages}
        </Text>

        <Heading as={"h2"} size={"lg"} >MY APP</Heading>

        <Stack paddingBottom={"24px"}>
          <Text fontSize={"20px"} fontWeight={"bold"}>オールウェイズ二郎 -ラーメンマップ検索&クチコミ投稿アプリ-</Text>
          <Text fontSize={"16px"} >Flutter・Firebaseを用いてアプリを開発・運用をしています</Text>
          <Text fontSize={"16px"} >AndroidはFlutterからAndroidネイティブ（JetpackCompose・Kotlin）にリプレイス中</Text>

          <HStack>
            <Link href={"https://apps.apple.com/jp/app/%E3%82%AA%E3%83%BC%E3%83%AB%E3%82%A6%E3%82%A7%E3%82%A4%E3%82%BA%E4%BA%8C%E9%83%8E-%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E3%83%9E%E3%83%83%E3%83%97%E6%A4%9C%E7%B4%A2-%E3%82%AF%E3%83%81%E3%82%B3%E3%83%9F%E3%82%A2%E3%83%97%E3%83%AA/id1604416308"}>
              <Box boxShadow={"dark-lg"} rounded={24} >
                <Image
                  width={"150px"}
                  objectFit='contain'
                  src='/app_store.svg'
                  alt='AppStoreからダウンロード'
                />
              </Box>
            </Link>
            <Link href={"https://play.google.com/store/apps/details?id=com.jiro_tabetai"}>
              <Box boxShadow={"dark-lg"} rounded={24} >
                <Image
                  width={"150px"}
                  objectFit='cover'
                  src='/google_play_store.svg'
                  alt='Google Playで手に入れよう'
                />
              </Box>
            </Link>
          </HStack>

          <HStack>
            <Box boxShadow={"dark-lg"}>
              <Image
                width={"150px"}
                objectFit='contain'
                src='/always_jiro.png'
                alt='オールウェイズ二郎の画像'
              />
            </Box>
            <Box boxShadow={"dark-lg"}>
              <Image
                width={"150px"}
                objectFit='contain'
                src='/always_jiro2.png'
                alt='オールウェイズ二郎の画像2'
              />
            </Box>
            <Box boxShadow={"dark-lg"}>
              <Image
                width={"150px"}
                objectFit='contain'
                src='/always_jiro3.png'
                alt='オールウェイズ二郎の画像3'
              />
            </Box>
          </HStack>
        </Stack>

        {/* <Heading as={"h2"} size={"lg"} >コミュニティ活動</Heading>

        <Stack>
          <Link href={"https://hackathon.flutteruniv.com/"}>
            <Text fontSize={"20px"} fontWeight={"bold"}>東京 Flutterハッカソン優勝</Text>
          </Link>
        </Stack> */}

        <Box height={"100px"}></Box>

      </Stack>
    </Box>
  )
}

export async function getAboutMe() {
  const filePath = path.join('exported-contents', 'about-me.md')
  const content = fs.readFileSync(filePath, { encoding: 'utf-8' })

  console.log('content', content)

  return content
}