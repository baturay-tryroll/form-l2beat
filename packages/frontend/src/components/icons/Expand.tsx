import classNames from 'classnames'
import React, { SVGAttributes } from 'react'

import { Icon } from './Icon'

export function ExpandIcon(props: SVGAttributes<SVGElement>) {
  const { className, ...rest } = props
  return (
    <Icon
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className={classNames('my-auto fill-black dark:fill-white', className)}
      {...rest}
    >
      <path
        id="Vector"
        d="M-0.000306205 0.000304147V3.30041C-0.00143067 3.37991 0.0132586 3.45886 0.0429077 3.53264C0.0725569 3.60642 0.116575 3.67358 0.172403 3.7302C0.228231 3.78682 0.294757 3.83179 0.368114 3.86248C0.44147 3.89317 0.520195 3.90897 0.599712 3.90897C0.67923 3.90897 0.757954 3.89317 0.831311 3.86248C0.904667 3.83179 0.971193 3.78682 1.02702 3.7302C1.08285 3.67358 1.12687 3.60642 1.15652 3.53264C1.18617 3.45886 1.20085 3.37991 1.19973 3.30041V2.0488L4.0756 4.92467C4.13089 4.98226 4.19711 5.02824 4.27039 5.05991C4.34367 5.09158 4.42253 5.10831 4.50236 5.10913C4.58219 5.10994 4.66138 5.09481 4.73528 5.06464C4.80919 5.03447 4.87634 4.98985 4.93279 4.9334C4.98924 4.87695 5.03385 4.8098 5.06403 4.73589C5.0942 4.66199 5.10933 4.5828 5.10852 4.50297C5.1077 4.42314 5.09097 4.34428 5.0593 4.271C5.02763 4.19772 4.98165 4.1315 4.92406 4.07621L2.04819 1.20034H3.29979C3.3793 1.20147 3.45824 1.18678 3.53203 1.15713C3.60581 1.12748 3.67297 1.08346 3.72959 1.02763C3.78621 0.971803 3.83118 0.905278 3.86187 0.831921C3.89255 0.758565 3.90836 0.67984 3.90836 0.600323C3.90836 0.520805 3.89255 0.44208 3.86187 0.368724C3.83118 0.295367 3.78621 0.228842 3.72959 0.173013C3.67297 0.117185 3.60581 0.0731672 3.53203 0.0435181C3.45824 0.0138689 3.3793 -0.000820316 3.29979 0.000304147H-0.000306205ZM8.69996 0.000304147C8.62045 -0.000820316 8.54151 0.0138689 8.46773 0.0435181C8.39394 0.0731672 8.32679 0.117185 8.27017 0.173013C8.21354 0.228842 8.16858 0.295367 8.13789 0.368724C8.1072 0.44208 8.0914 0.520805 8.0914 0.600323C8.0914 0.67984 8.1072 0.758565 8.13789 0.831921C8.16858 0.905278 8.21354 0.971803 8.27017 1.02763C8.32679 1.08346 8.39394 1.12748 8.46773 1.15713C8.54151 1.18678 8.62045 1.20147 8.69996 1.20034H9.95156L7.07569 4.07621C7.01811 4.1315 6.97213 4.19772 6.94046 4.271C6.90878 4.34428 6.89205 4.42314 6.89124 4.50297C6.89043 4.5828 6.90555 4.66199 6.93573 4.73589C6.9659 4.8098 7.01052 4.87695 7.06697 4.9334C7.12342 4.98985 7.19056 5.03447 7.26447 5.06464C7.33838 5.09481 7.41757 5.10994 7.49739 5.10913C7.57722 5.10831 7.65608 5.09158 7.72936 5.05991C7.80264 5.02824 7.86887 4.98226 7.92416 4.92467L10.8 2.0488V3.30041C10.7989 3.37991 10.8136 3.45886 10.8432 3.53264C10.8729 3.60642 10.9169 3.67358 10.9727 3.7302C11.0286 3.78682 11.0951 3.83179 11.1684 3.86248C11.2418 3.89317 11.3205 3.90897 11.4 3.90897C11.4796 3.90897 11.5583 3.89317 11.6316 3.86248C11.705 3.83179 11.7715 3.78682 11.8274 3.7302C11.8832 3.67358 11.9272 3.60642 11.9568 3.53264C11.9865 3.45886 12.0012 3.37991 12.0001 3.30041V0.000304147H8.69996ZM4.48811 6.89466C4.33223 6.8993 4.18428 6.96445 4.0756 7.0763L1.19973 9.95217V8.70057C1.20083 8.62035 1.18583 8.54071 1.15561 8.46639C1.1254 8.39206 1.08058 8.32455 1.02382 8.26784C0.967062 8.21113 0.899506 8.16638 0.82515 8.13624C0.750794 8.1061 0.671148 8.09117 0.590923 8.09235C0.431891 8.09468 0.280289 8.16005 0.169428 8.2741C0.0585679 8.38814 -0.00248168 8.54154 -0.000306205 8.70057V12.0007H3.29979C3.3793 12.0018 3.45824 11.9871 3.53203 11.9575C3.60581 11.9278 3.67297 11.8838 3.72959 11.828C3.78621 11.7721 3.83118 11.7056 3.86187 11.6323C3.89255 11.5589 3.90836 11.4802 3.90836 11.4007C3.90836 11.3211 3.89255 11.2424 3.86187 11.1691C3.83118 11.0957 3.78621 11.0292 3.72959 10.9733C3.67297 10.9175 3.60581 10.8735 3.53203 10.8438C3.45824 10.8142 3.3793 10.7995 3.29979 10.8006H2.04819L4.92406 7.92477C5.01077 7.84049 5.06999 7.73198 5.09396 7.61346C5.11794 7.49495 5.10555 7.37195 5.05843 7.2606C5.0113 7.14924 4.93163 7.05472 4.82987 6.98942C4.7281 6.92412 4.60898 6.89109 4.48811 6.89466ZM7.49348 6.89466C7.37416 6.8948 7.2576 6.93052 7.15868 6.99723C7.05977 7.06395 6.98298 7.15863 6.93814 7.2692C6.8933 7.37977 6.88243 7.50119 6.90693 7.61796C6.93143 7.73473 6.99019 7.84155 7.07569 7.92477L9.95156 10.8006H8.69996C8.62045 10.7995 8.54151 10.8142 8.46773 10.8438C8.39394 10.8735 8.32679 10.9175 8.27017 10.9733C8.21354 11.0292 8.16858 11.0957 8.13789 11.1691C8.1072 11.2424 8.0914 11.3211 8.0914 11.4007C8.0914 11.4802 8.1072 11.5589 8.13789 11.6323C8.16858 11.7056 8.21354 11.7721 8.27017 11.828C8.32679 11.8838 8.39394 11.9278 8.46773 11.9575C8.54151 11.9871 8.62045 12.0018 8.69996 12.0007H12.0001V8.70057C12.0012 8.62035 11.9862 8.54071 11.9559 8.46639C11.9257 8.39206 11.8809 8.32455 11.8242 8.26784C11.7674 8.21113 11.6998 8.16638 11.6255 8.13624C11.5511 8.1061 11.4715 8.09117 11.3913 8.09235C11.2322 8.09468 11.0806 8.16005 10.9698 8.2741C10.8589 8.38814 10.7978 8.54154 10.8 8.70057V9.95217L7.92416 7.0763C7.86817 7.01875 7.80121 6.97302 7.72723 6.94182C7.65325 6.91062 7.57377 6.89458 7.49348 6.89466Z"
      />
    </Icon>
  )
}
