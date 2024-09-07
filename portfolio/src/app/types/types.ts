export type linksT = {
  name: string;
  href: string;
};

export type experience = {
  title: string;
  companyName: string;
  employmentType: string;
  location: string;
  LocationType: string;
  currentWorking: boolean;
  startDate: Date;
  endDate: Date;
  description: string;
};

export type projectT = {
  name: string;
  photoName: string;
  shortDesc: string;
  href: string;
};

export type portfolioData = {
  links?: linksT[];
  about_me?: string;
  experience?: experience[];
  projects?: projectT[];
};

export type fileOptionsT = {
  filename: string;
  extension: string;
  contentType: string
}

export enum contentType {
  TextPlain = 'text/plain',
  TextHtml = 'text/html',
  TextCss = 'text/css',
  TextJavascript = 'text/javascript',

  ApplicationJson = 'application/json',
  ApplicationXml = 'application/xml',
  ApplicationXWwwFormUrlencoded = 'application/x-www-form-urlencoded',
  ApplicationOctetStream = 'application/octet-stream',
  ApplicationPdf = 'application/pdf',
  ApplicationZip = 'application/zip',
  ApplicationRtf = 'application/rtf',
  ApplicationMsword = 'application/msword',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ApplicationVndMsExcel = 'application/vnd.ms-excel',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ApplicationVndMsPowerpoint = 'application/vnd.ms-powerpoint',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',

  ImageJpeg = 'image/jpeg',
  ImagePng = 'image/png',
  ImageGif = 'image/gif',
  ImageBmp = 'image/bmp',
  ImageWebp = 'image/webp',
  ImageSvgXml = 'image/svg+xml',
  ImageTiff = 'image/tiff',

  AudioMpeg = 'audio/mpeg',
  AudioOgg = 'audio/ogg',
  AudioWave = 'audio/wave',
  AudioWebm = 'audio/webm',

  VideoMpeg = 'video/mpeg',
  VideoMp4 = 'video/mp4',
  VideoOgg = 'video/ogg',
  VideoWebm = 'video/webm',
  VideoXMsWmv = 'video/x-ms-wmv',
  VideoAvi = 'video/x-msvideo',

  MultipartFormData = 'multipart/form-data',

  FontTtf = 'font/ttf',
  FontOtf = 'font/otf',
  FontWoff = 'font/woff',
  FontWoff2 = 'font/woff2',
}
