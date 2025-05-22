import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge";
import React from 'react'

const Course = ({course}) => {
  return (
    <Card className='overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300'>
        <div className='relative'>
        <img src="data:image/jpeg;base64,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"
        alt="course" 
        className='w-full h-36 object-cover rounded-t-lg'
        />
        </div>
        <CardContent className="px-5 py-4 space-y-3">
        <h1 className="hover:underline font-bold text-lg truncate">
          {"Course Title"}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={"https://github.com/shadcn.png"} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-sm">{"Aditya Shriwas"}</h1>
          </div>
          <Badge className={'bg-blue-600 text-white px-2 py-1 text-xs rounded-full'}>
            {"Beginner"}
          </Badge>
        </div>
        <div className="text-lg font-bold">
            <span>₹{"100"}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default Course