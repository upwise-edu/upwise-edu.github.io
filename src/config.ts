// 사이트 메타데이터 (브라우저 탭, SNS 공유 등)
// 실제 텍스트는 src/data/site.json 에서 관리됩니다.
import { site } from './data';

export const SITE_TITLE = site.site.title;
export const SITE_DESCRIPTION = site.site.description;
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;
