<GameProjectFile>
  <PropertyGroup Type="Node" Name="Card" ID="84be6110-cac1-4bd5-8df6-78e92a3251b6" Version="2.1.2.0" />
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
      <ObjectData Name="Node" FrameEvent="" Tag="10" ctype="SingleNodeObjectData">
        <Position X="0.0000" Y="0.0000" />
        <Scale ScaleX="1.0000" ScaleY="1.0000" />
        <AnchorPoint />
        <CColor A="255" R="255" G="255" B="255" />
        <Size X="0.0000" Y="0.0000" />
        <PrePosition X="0.0000" Y="0.0000" />
        <PreSize X="0.0000" Y="0.0000" />
        <Children>
          <NodeObjectData Name="root" ActionTag="-798426174" FrameEvent="" Tag="28" IconVisible="True" ctype="SingleNodeObjectData">
            <Position X="0.0000" Y="0.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <AnchorPoint />
            <CColor A="255" R="255" G="255" B="255" />
            <Size X="0.0000" Y="0.0000" />
            <PrePosition X="0.0000" Y="0.0000" />
            <PreSize X="0.0000" Y="0.0000" />
            <Children>
              <NodeObjectData Name="bkg_normal" CanEdit="False" ActionTag="776491498" FrameEvent="" Tag="11" LeftMargin="-60.0000" RightMargin="-60.0000" TopMargin="-60.0000" BottomMargin="-60.0000" ctype="SpriteObjectData">
                <Position X="0.0000" Y="0.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <CColor A="255" R="255" G="255" B="255" />
                <Size X="120.0000" Y="120.0000" />
                <PrePosition X="0.0000" Y="0.0000" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="assets/img/tile_normal.png" />
              </NodeObjectData>
              <NodeObjectData Name="bkg_highlight" CanEdit="False" ActionTag="39276593" VisibleForFrame="False" FrameEvent="" Tag="36" LeftMargin="-59.9999" RightMargin="-60.0001" TopMargin="-60.0000" BottomMargin="-60.0000" ctype="SpriteObjectData">
                <Position X="0.0001" Y="0.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <CColor A="255" R="255" G="255" B="255" />
                <Size X="120.0000" Y="120.0000" />
                <PrePosition X="0.0000" Y="0.0000" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="assets/img/tile_highlight.png" />
              </NodeObjectData>
              <NodeObjectData Name="name_bkg" CanEdit="False" ActionTag="1318852081" FrameEvent="" Tag="15" LeftMargin="-48.9114" RightMargin="-50.0886" TopMargin="-20.6162" BottomMargin="-28.3838" ctype="SpriteObjectData">
                <Position X="0.5886" Y="-3.8838" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <CColor A="255" R="255" G="255" B="255" />
                <Size X="99.0000" Y="49.0000" />
                <PrePosition X="0.0000" Y="0.0000" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="assets/img/name_bkg.png" />
              </NodeObjectData>
              <NodeObjectData Name="name" ActionTag="-920951506" FrameEvent="" Tag="12" LeftMargin="-25.3121" RightMargin="-26.6879" TopMargin="-17.1044" BottomMargin="-24.8956" IsCustomSize="True" FontSize="36" LabelText="Na" ctype="TextObjectData">
                <Position X="0.6879" Y="-3.8956" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <CColor A="255" R="255" G="255" B="255" />
                <Size X="52.0000" Y="42.0000" />
                <PrePosition X="0.0000" Y="0.0000" />
                <PreSize X="0.0000" Y="0.0000" />
              </NodeObjectData>
              <NodeObjectData Name="hp" CanEdit="False" ActionTag="622467775" FrameEvent="" Tag="16" LeftMargin="-54.2992" RightMargin="-55.7008" TopMargin="43.8559" BottomMargin="-51.8559" ProgressInfo="100" ctype="LoadingBarObjectData">
                <Position X="0.7008" Y="-47.8559" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <CColor A="255" R="255" G="255" B="255" />
                <Size X="110.0000" Y="8.0000" />
                <PrePosition X="0.0000" Y="0.0000" />
                <PreSize X="0.0000" Y="0.0000" />
                <ImageFileData Type="Normal" Path="assets/img/hp_bar.png" />
              </NodeObjectData>
              <NodeObjectData Name="level_label" CanEdit="False" ActionTag="-1809519898" FrameEvent="" Tag="17" LeftMargin="-50.6179" RightMargin="30.6179" TopMargin="-47.9689" BottomMargin="27.9689" IsCustomSize="True" FontSize="14" LabelText="LV" ctype="TextObjectData">
                <Position X="-40.6179" Y="37.9689" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <CColor A="255" R="137" G="137" B="137" />
                <Size X="20.0000" Y="20.0000" />
                <PrePosition X="0.0000" Y="0.0000" />
                <PreSize X="0.0000" Y="0.0000" />
              </NodeObjectData>
              <NodeObjectData Name="level" CanEdit="False" ActionTag="-2003017505" FrameEvent="" Tag="18" LeftMargin="-29.3446" RightMargin="22.3446" TopMargin="-47.9689" BottomMargin="27.9689" FontSize="14" LabelText="1" ctype="TextObjectData">
                <Position X="-25.8446" Y="37.9689" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <CColor A="255" R="137" G="137" B="137" />
                <Size X="7.0000" Y="20.0000" />
                <PrePosition X="0.0000" Y="0.0000" />
                <PreSize X="0.0000" Y="0.0000" />
              </NodeObjectData>
            </Children>
          </NodeObjectData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameProjectFile>