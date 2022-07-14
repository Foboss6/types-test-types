import { ApiProperty } from "@nestjs/swagger";

export class PaginatedDto<TData = void> {
  @ApiProperty()
  currentPage: number;
  @ApiProperty()
  totalPages: number;
  @ApiProperty()
  itemsPerPage?: number;
  @ApiProperty()
  hasNextPage?: boolean;
  @ApiProperty()
  data?: TData[];
}

export class MicrosoftGraphPhoto {
  @ApiProperty()
  image: string;
  @ApiProperty()
  contentType: string;
}

export class MicrosoftGraphData {
  @ApiProperty()
  id: string;
  @ApiProperty()
  businessPhones: string[];
  @ApiProperty()
  displayName: string;
  @ApiProperty()
  givenName: string;
  @ApiProperty({ type: String })
  jobTitle: string | null;
  @ApiProperty()
  mail: string;
  @ApiProperty()
  mobilePhone: string;
  @ApiProperty()
  officeLocation: string;
  @ApiProperty({ type: String })
  preferredLanguage: string | null;
  @ApiProperty()
  surname: string;
  @ApiProperty()
  userPrincipalName: string;
  @ApiProperty({ type: MicrosoftGraphPhoto })
  photo: MicrosoftGraphPhoto | null;
  @ApiProperty()
  error?: string;
}

export class BulkResponse<TData = void, TErrors = string> {
  @ApiProperty()
  data: TData[];
  @ApiProperty()
  errors: TErrors[];
}
