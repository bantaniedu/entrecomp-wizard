declare module 'xlsx' {
  export interface WorkSheet {
    [key: string]: any
  }

  export interface WorkBook {
    SheetNames: string[]
    Sheets: { [key: string]: WorkSheet }
  }

  export interface ReadOptions {
    type?: 'buffer' | 'array' | 'string' | 'base64' | 'binary' | 'file'
  }

  export function read(data: any, opts?: ReadOptions): WorkBook

  export const utils: {
    sheet_to_txt(worksheet: WorkSheet): string
    sheet_to_json<T = any>(worksheet: WorkSheet, opts?: any): T[]
    sheet_to_csv(worksheet: WorkSheet): string
  }
}
