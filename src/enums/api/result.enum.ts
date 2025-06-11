/**
 * API 响应结果枚举
 */
export enum ResultEnum {
  /** 成功 */
  SUCCESS = 200,
  /** 访问令牌无效 */
  ACCESS_TOKEN_INVALID = 401,
  /** 刷新令牌无效 */
  REFRESH_TOKEN_INVALID = 402,
  /** 服务器内部错误 */
  SERVER_ERROR = 500,
}
