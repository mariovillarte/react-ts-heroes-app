import { SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Link } from "react-router";

interface Breadcrum {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadcrums?: Breadcrum[];
}

export const CustomBreadcrums = ({ currentPage, breadcrums = [] }: Props) => {
  return (
    <div className=" my-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/"> Inicio</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
         

          {breadcrums.map((crum) => (
            <div className=" flex items-center">
              <BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
                <BreadcrumbLink asChild>
                  <Link to={crum.to}> {crum.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))}

           <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <BreadcrumbLink className="text-black">
                {currentPage}
              </BreadcrumbLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
