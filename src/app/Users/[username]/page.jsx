import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import CardList from "@/components/CardList/CardList";
import { BadgeCheck } from "lucide-react";
import { Citrus } from "lucide-react";
import { Candy } from "lucide-react";
import { Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import EditUser from "@/components/EditUser/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { size } from "zod";
import AppLineChar from "@/components/AppLineChart/AppLineChart";
// مصفوفة الشارات
const badges = [
  {
    icon: BadgeCheck,
    color: "bg-blue-500/30",
    border: "border-blue-500/50",
    title: "Verified User",
    description: "This user has been verified by the admin.",
  },
  {
    icon: Shield,
    color: "bg-green-800/30",
    border: "border-green-800/50",
    title: "Admin",
    description:
      "Admin users have access to all features and can manage users.",
  },
  {
    icon: Candy,
    color: "bg-yellow-500/30",
    border: "border-yellow-500/50",
    title: "Awarded",
    description: "This user has been awarded for their contributions.",
  },
  {
    icon: Citrus,
    color: "bg-orange-500/30",
    border: "border-orange-500/50",
    title: "Popular",
    description: "This user has been popular in the community.",
  },
];
function SigleUserPage({ params }) {
  const { username } = params.username;

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/Users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{username}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* CONTAINER */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* LEFT */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* USER BADAES CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="font-semibold text-xl">User Badaes</h1>
            <div className="flex gap-4 mt-4">
              {badges.map((badge, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger>
                    <badge.icon
                      size={36}
                      className={`rounded-full ${badge.color} border-1 ${badge.border} p-2`}
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">{badge.title}</h1>
                    <p className="text-sm text-muted-foreground">
                      {badge.description}
                    </p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xl">User Information</h1>
              <Sheet>
                <SheetTrigger
                  className="border px-2 py-1 cursor-pointer rounded-lg bg-accent-foreground text-black"
                  asChild
                >
                  <button>Edit User</button>
                </SheetTrigger>
                {/* EDIT USER */}
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>Yehea Shorafa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>yehea@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+1 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>Palestine, Gaza</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge className={"font-normal"}>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </div>
          {/* CARD LIST CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* USER BADAES CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex i items-center gap-2">
              <Avatar className={"size-12"}>
                <AvatarImage
                  src="/assets/image/user.jpg"
                  className={"rounded-full"}
                />
                <AvatarFallback>YS</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Yehea shorafa</h1>
            </div>
            <p className="text-sm text-muted-foreground my-2  w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, doloribus iusto ex dignissimos nesciunt aspernatur
              eaque voluptatibus dolores inventore repudiandae eveniet explicabo
              eum autem, harum similique officiis corporis. Necessitatibus,
              nihil!
            </p>
          </div>
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold mb-6">User Acivity</h1>
            <AppLineChar/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigleUserPage;
