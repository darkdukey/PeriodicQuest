<GameProjectFile>
  <PropertyGroup Type="Node" Name="Card" ID="84be6110-cac1-4bd5-8df6-78e92a3251b6" Version="2.2.6.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="30" Speed="1.0000">
        <Timeline ActionTag="-798426174" Property="Position">
          <PointFrame FrameIndex="0" X="0.0000" Y="0.0000" />
          <PointFrame FrameIndex="10" X="0.0000" Y="0.0000" />
          <PointFrame FrameIndex="15" X="0.0000" Y="0.0000" />
          <PointFrame FrameIndex="20" X="0.0000" Y="0.0000" />
          <PointFrame FrameIndex="30" X="0.0000" Y="0.0000" />
        </Timeline>
        <Timeline ActionTag="-798426174" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000" />
          <ScaleFrame FrameIndex="10" X="1.1000" Y="1.1000" />
          <ScaleFrame FrameIndex="15" X="1.3000" Y="1.3000" />
          <ScaleFrame FrameIndex="20" X="1.1000" Y="1.1000" />
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000" />
        </Timeline>
        <Timeline ActionTag="-798426174" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000" />
          <ScaleFrame FrameIndex="10" X="0.0000" Y="0.0000" />
          <ScaleFrame FrameIndex="15" X="0.0000" Y="0.0000" />
          <ScaleFrame FrameIndex="20" X="0.0000" Y="0.0000" />
          <ScaleFrame FrameIndex="30" X="0.0000" Y="0.0000" />
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="attack" StartIndex="0" EndIndex="30">
          <RenderColor A="150" R="244" G="164" B="96" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="10" ctype="GameNodeObjectData">
        <Size />
        <Children>
          <AbstractNodeData Name="root" ActionTag="-798426174" Tag="28" IconVisible="True" ctype="SingleNodeObjectData">
            <Size />
            <Children>
              <AbstractNodeData Name="bkg_normal" CanEdit="False" ActionTag="776491498" Tag="11" IconVisible="False" LeftMargin="-60.0000" RightMargin="-60.0000" TopMargin="-60.0000" BottomMargin="-60.0000" ctype="SpriteObjectData">
                <Size X="120.0000" Y="120.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize />
                <FileData Type="Normal" Path="assets/img/tile_normal.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="bkg_highlight" CanEdit="False" ActionTag="39276593" Tag="36" VisibleForFrame="False" IconVisible="False" LeftMargin="-59.9999" RightMargin="-60.0001" TopMargin="-60.0000" BottomMargin="-60.0000" ctype="SpriteObjectData">
                <Size X="120.0000" Y="120.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="0.0001" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize />
                <FileData Type="Normal" Path="assets/img/tile_highlight.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="name_bkg" CanEdit="False" ActionTag="1318852081" Tag="15" IconVisible="False" LeftMargin="-48.9114" RightMargin="-50.0886" TopMargin="-20.6162" BottomMargin="-28.3838" ctype="SpriteObjectData">
                <Size X="99.0000" Y="49.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="0.5886" Y="-3.8838" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize />
                <FileData Type="Normal" Path="assets/img/name_bkg.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="name" ActionTag="-920951506" Tag="12" IconVisible="False" LeftMargin="-25.3121" RightMargin="-26.6879" TopMargin="-17.1044" BottomMargin="-24.8956" IsCustomSize="True" FontSize="36" LabelText="Na" ctype="TextObjectData">
                <Size X="52.0000" Y="42.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="0.6879" Y="-3.8956" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize />
              </AbstractNodeData>
              <AbstractNodeData Name="hp" CanEdit="False" ActionTag="622467775" Tag="16" IconVisible="False" LeftMargin="-54.2992" RightMargin="-55.7008" TopMargin="43.8559" BottomMargin="-51.8559" ProgressInfo="100" ctype="LoadingBarObjectData">
                <Size X="110.0000" Y="8.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="0.7008" Y="-47.8559" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize />
                <ImageFileData Type="Normal" Path="assets/img/hp_bar.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="level_label" CanEdit="False" ActionTag="-1809519898" Tag="17" IconVisible="False" LeftMargin="-50.6179" RightMargin="30.6179" TopMargin="-47.9689" BottomMargin="27.9689" IsCustomSize="True" FontSize="14" LabelText="LV" ctype="TextObjectData">
                <Size X="20.0000" Y="20.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="-40.6179" Y="37.9689" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="137" G="137" B="137" />
                <PrePosition />
                <PreSize />
              </AbstractNodeData>
              <AbstractNodeData Name="level" CanEdit="False" ActionTag="-2003017505" Tag="18" IconVisible="False" LeftMargin="-29.3446" RightMargin="22.3446" TopMargin="-47.9689" BottomMargin="27.9689" FontSize="14" LabelText="1" ctype="TextObjectData">
                <Size X="7.0000" Y="20.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="-25.8446" Y="37.9689" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="137" G="137" B="137" />
                <PrePosition />
                <PreSize />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameProjectFile>